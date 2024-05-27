"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dataLclassroom from "../../../../../../public/utils/dataLectureClass";

import LectureCardSession from "@/app/components/lecture/LectureClass/LectureCardSession";
import dataSessions from "../../../../../../public/utils/dataSession";
import Link from "next/link";

interface ClassData {
  id: string;
  name: string;
  time: string;
  place: string;
  studentCount: number;
  meetings: number;
  meetingsStatus: "Sesuai" | "Kurang";
  groupCode: string;
  sks: number;
}

const RoomDetail = () => {
  const { id } = useParams();

  // data classRoom

  const selectedClass: ClassData | undefined = dataLclassroom.find(
    (kelas: ClassData) => kelas.id === id
  );

  if (!selectedClass) {
    return <div>kelas tidak ditemukan</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <p>{selectedClass.name}</p>
      <div className="head-info-room grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="box-1 p-3 bg-blue-200 rounded-lg shadow-md w-full h-[20vh]">
          Jumlah Mhs
        </div>
        <div className="box-2 p-3 bg-blue-200 rounded-lg shadow-md w-full h-[20vh]">
          Jumlah pertemuan
        </div>
        <div className="box-3 p-3  bg-blue-200 rounded-lg shadow-md w-full h-[20vh]">
          Mahasiswa Izin
        </div>
      </div>
      List pertemuan
      <div className="list-pertemuan h-[50vh] overflow-auto">
        <ul className="grid grid-cols-1 gap-4">
          {dataSessions.map((session) => (
            <li className="" key={session.id}>
              <Link href={`/dashboard/lecture/room/${id}/${session.id}`}>
                <LectureCardSession weekD={session} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoomDetail;
