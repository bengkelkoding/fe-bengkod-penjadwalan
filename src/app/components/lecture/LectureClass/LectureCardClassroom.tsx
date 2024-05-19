"use client";
import React from "react";

interface LectureCardClassroomProps {
  ClassName: string;
  ClassTime: string;
  ClassPlace: string;
  ClassStudentCount: number;
  ClassMeetings: number;
  ClassMeetingsStatus: "Sesuai" | "Kurang";
  ClassGroupCode: string;
}

const LectureCardClassroom = ({
  ClassName,
  ClassTime,
  ClassPlace,
  ClassStudentCount,
  ClassMeetings,
  ClassMeetingsStatus,
  ClassGroupCode,
}: LectureCardClassroomProps) => {
  return (
    <div className="w-full min-h-[25vh] flex justify-between bg-white shadow-lg p-3 rounded-lg">
      <div className="left-data">
        <h2 className="font-medium text-xl">{ClassName}</h2>
        <p className="mt-3">Kode Matkul : {ClassGroupCode}</p>
        <p>
          {ClassTime} | {ClassPlace}
        </p>

        <div className="flex gap-3">
          <p>Mahasiswa: {ClassStudentCount}</p>
        </div>
      </div>
      <div className="rigt-data text-center ">
        <p>Week</p>
        <p> {ClassMeetings}/14</p>
        <p>{ClassMeetingsStatus}</p>
      </div>
    </div>
  );
};

export default LectureCardClassroom;
