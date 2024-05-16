import React from "react";

interface CardRoomProps {
  className: string;
  classPlace: string;
  classDay: string;
  classTime: string;
  group_code: string;
  sks: number;
  LectureName: string;
  LectureNip: number;
  LecturePhone: string;
}

const CardRoom: React.FC<CardRoomProps> = ({
  className,
  classPlace,
  classDay,
  classTime,
  group_code,
  sks,
  LectureName,
  LectureNip,
  LecturePhone,
}) => {
  return (
    <div className="w-full h-40 p-3 rounded-lg bg-white text-white  flex flex-col gap-3 font-semibold shadow-md">
      {/* hari */}
      <div className="box bg-yellow-300 rounded-full w-1/2">
        <p className="text-center">{classDay}</p>
      </div>
      {/* nama kelas */}
      <div className="box bg-blue-700 rounded-full w-50 line-clamp-1 text-base  text-ellipsis ">
        <p className="pl-3">{className}</p>
      </div>

      <div className="box text-sm flex gap-2">
        <p className="waktu px-3 bg-slate-500 rounded-full">{classTime}</p>
        <p className="tempat px-3 bg-slate-400 rounded-full">{classPlace}</p>
      </div>

      <div className="box text-sm flex gap-2">
        <p className="waktu px-3 bg-slate-500 rounded-full">
          {group_code} - {sks} sks
        </p>
      </div>
    </div>
  );
};

export default CardRoom;
