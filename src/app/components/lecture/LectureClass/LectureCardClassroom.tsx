"use client";
import React from "react";

interface LectureCardProps {
  id: number;
  kodeMatkul: string;
  namaMatkul: string;
  kodeKelompok: string;
  sks: number;
  day: string;
  jumlahMahasiswa: number;
  timeStart: string;
  timeEnd: string;
  classroom: string;
  dosen: {
    fullname: string;
    nip: string;
  };
}

const LectureCardClassroom = ({
  kodeMatkul,
  namaMatkul,
  kodeKelompok,
  sks,
  day,
  jumlahMahasiswa,
  timeStart,
  timeEnd,
  classroom,
  dosen,
}: LectureCardProps) => {
  return (
    <div className="w-full min-h-[25vh] flex justify-between shadow-lg p-5 rounded-lg">
      <div className="left-data">
        <h2 className="font-medium text-xl">{namaMatkul}</h2>
        <p className="mt-3">Kode Matkul : {kodeKelompok}</p>
        <p>
          {timeStart} - {timeEnd} | {classroom}
        </p>

        <div className="flex gap-3">
          <p>Mahasiswa: {jumlahMahasiswa}</p>
        </div>
      </div>
      <div className="rigt-data text-center ">
        <p>sks</p>
        {/* <p> {ClassMeetings}/14</p>
        <p>{ClassMeetingsStatus}</p> */}
        <p> {sks} </p>
      </div>
    </div>
  );
};

export default LectureCardClassroom;
