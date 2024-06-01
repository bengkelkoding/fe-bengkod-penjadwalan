"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dataLclassroom from "../../../../../../public/utils/dataLectureClass";

import LectureCardSession from "@/app/components/lecture/LectureClass/LectureCardSession";
// import dataSessions from "../../../../../../public/utils/dataSession";
import Link from "next/link";
import { DataLectureClass } from "@/model/ModelLectureCardClass";
import { ApiLectureSchedule } from "@/app/api/LectureSchedule";
import { ApiDetailLectureSchedule } from "@/app/api/LectureScheduleDetail";
import { stringify } from "querystring";
import { DataSessionClass } from "@/model/ModelSessionClass";

const RoomDetail = () => {
  const { id } = useParams();

  // data classRoom
  const [scheduleData, setScheduleData] = useState<
    DataLectureClass[] | undefined
  >();
  const [dataSession, setDataSession] = useState<
    DataSessionClass[] | undefined
  >();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiLectureSchedule();
        const dataSchedule = data.payload;
        console.log("hasilnya:", dataSchedule);

        const dataDetail = await ApiDetailLectureSchedule(id.toString());
        const dataPresences = dataDetail.payload.presences;
        setDataSession(dataPresences);
        setScheduleData(dataSchedule);
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedClass: DataLectureClass | undefined = scheduleData?.find(
    (kelas: DataLectureClass) => kelas.id.toString() === id
  );

  if (!selectedClass) {
    return <div>kelas loading</div>;
  }

  // get detail

  return (
    <div className="flex flex-col gap-5">
      <p className="font-semibold text-4xl">{selectedClass.nama_matkul}</p>
      <div className="head-info-room grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="box-1 flex items-center justify-center gap-8 p-3 bg-gradient-to-r from-[#3263de]  to-[#6aa2f0] rounded-lg shadow-md w-full h-[20vh]">
          <div className="icon  w-16 h-16 rounded-full flex justify-center items-center">
            <svg
              className="w-14 h-14 p-2 rounded-full bg-white/15  text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="text">
            <h1 className="text-5xl font-semibold text-white">
              {selectedClass.jumlah_mahasiswa}
            </h1>
            <p className="text-xl font-semibold text-white">Mahasiswa</p>
          </div>
        </div>
        <div className="box-2 flex items-center justify-center gap-8  p-3 bg-gradient-to-r from-[#22733d]  to-[#3bc469] rounded-lg shadow-md w-full h-[20vh]">
          <div className="icon  w-16 h-16 rounded-full flex justify-center items-center">
            <svg
              className="w-14 h-14 p-2 rounded-full bg-white/15  text-white  dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="text">
            <h1 className="text-5xl font-semibold text-white">
              {dataSession?.length}
            </h1>
            <p className="text-xl font-semibold text-white">Pertemuan</p>
          </div>
        </div>
        <div className="box-3 flex items-center justify-center gap-8  p-3  bg-gradient-to-r from-[#3263de]  to-[#6aa2f0] rounded-lg shadow-md w-full h-[20vh]">
          <div className="icon  w-16 h-16 rounded-full flex justify-center items-center">
            <svg
              className="w-14 h-14 p-2 rounded-full bg-white/15  text-white  dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M5 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-2 9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Zm13-6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="text">
            <h1 className="text-5xl font-semibold text-white">0</h1>
            <p className="text-xl font-semibold text-white">Mahasiswa Izin</p>
          </div>
        </div>
      </div>
      List pertemuan
      <div className="list-pertemuan h-[50vh] overflow-auto">
        <ul className="grid grid-cols-1 gap-4">
          {/* ini ganti api nya make detail schedule */}

          {dataSession ? (
            dataSession.map((session) => (
              <li className="" key={session.id}>
                <Link href={`/dashboard/lecture/room/${id}/${session.id}`}>
                  <LectureCardSession weekD={session} />
                </Link>
              </li>
            ))
          ) : (
            <p>loading</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RoomDetail;
