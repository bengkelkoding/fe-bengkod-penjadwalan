"use client";
import { ApiLectureSchedule } from "@/app/api/LectureSchedule";
import LectureCard from "@/app/components/lecture/LectureClass/LectureCard";
import LectureCardClassroom from "@/app/components/lecture/LectureClass/LectureCardClassroom";
import { fetchScheduleData } from "@/app/controller/Lecture/FetchingDataClass";
import { DataLectureClass } from "@/model/ModelLectureCardClass";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [scheduleData, setScheduleData] = useState<
    DataLectureClass[] | undefined
  >();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiLectureSchedule();
        const dataSchedule = data.payload;
        console.log(dataSchedule);
        setScheduleData(dataSchedule);
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    };

    fetchData();
  }, []);

  const renderLoading = () => {
    if (scheduleData == undefined) {
      return <p>loading</p>;
    }
  };
  console.log("berhasil", scheduleData);
  return (
    <>
      <h2 className="bg-white my-5 px-2 rounded-full text-sm">Daftar Kelas</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {renderLoading()}
        {scheduleData ? (
          scheduleData.map((kelas: DataLectureClass) => (
            <li key={kelas.id}>
              <Link href={`/dashboard/lecture/room/${kelas.id}`}>
                <LectureCardClassroom
                  id={kelas.id}
                  kodeMatkul={kelas.kode_matkul}
                  namaMatkul={kelas.nama_matkul}
                  kodeKelompok={kelas.kode_kelompok}
                  sks={kelas.sks}
                  day={kelas.day}
                  jumlahMahasiswa={kelas.jumlah_mahasiswa}
                  timeStart={kelas.time_start}
                  timeEnd={kelas.time_end}
                  classroom={kelas.classroom}
                  dosen={kelas.dosen}
                />
              </Link>
            </li>
          ))
        ) : (
          <p>loading</p>
        )}
      </ul>
    </>
  );
}
