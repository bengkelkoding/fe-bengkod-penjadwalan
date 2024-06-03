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
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a href="/dashboard/lecture" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
              </svg>
              Home
            </a>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Daftar Kelas</span>
            </div>
          </li>
        </ol>
      </nav>
      <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Daftar Kelas</h2>
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
