"use client";
import { ApiLectureSchedule } from "@/app/api/LectureSchedule";
import { ApiDetailLectureSchedule } from "@/app/api/LectureScheduleDetail";
import { DataLectureClass } from "@/model/ModelLectureCardClass";
import React, { useState, useEffect } from "react";

const ListAllMhs = () => {
  // 1. ambil id kelas yang ada
  const [scheduleData, setScheduleData] = useState<DataLectureClass[] | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  // dapatin schedule list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const schedules = await ApiLectureSchedule();
        const schedulesWithStudents = await Promise.all(
          schedules.map(async (schedule: DataLectureClass) => {
            const dptId = schedule.id;
            const students = await ApiDetailLectureSchedule(dptId.toString());
            return { ...schedule, students };
          })
        );
        setScheduleData(schedulesWithStudents);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(scheduleData);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nomor
            </th>
            <th scope="col" className="px-6 py-3">
              Nama
            </th>
            <th scope="col" className="px-6 py-3">
              NIM
            </th>
            <th scope="col" className="px-6 py-3">
              Kelas
            </th>
            <th scope="col" className="px-6 py-3">
              Kode Kelompok
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {students.map((student, index) => (
            <tr
              key={student.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{student.user.fullname}</td>
              <td className="px-6 py-4">{student.nim}</td>
              <td className="px-6 py-4">{student.schedule.nama_matkul}</td>
              <td className="px-6 py-4">{student.schedule.kode_kelompok}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default ListAllMhs;
