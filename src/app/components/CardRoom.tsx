import React from "react";

interface CardRoomProps {
  className: string;
  classPlace: string;
  classDay: string;
  classTime: string;
  group_code: string;
  sks: number;
  LectureName: string;
  LectureNip: string;
}

const CardRoom: React.FC<CardRoomProps> = ({ className, classPlace, classDay, classTime, group_code, sks }) => {
  return (
    <div className="w-full h-40 rounded-3xl hover:bg-blue-900  duration-300 group bg-white text-white flex flex-col shadow-md ">
      {/* hari */}
      <div className="box  text-blue-900  rounded-full w-1/2  ">
        <p className="text-white px-4 group-hover:bg-white duration-300 group-hover:text-blue-900 font-bold text-sm bg-blue-900 rounded-tl-[20px] rounded-br-2xl   py-2 ml-0 mt-0">{classDay}</p>
      </div>
      {/* nama kelas */}
      <div className="box mt-4 w-50 line-clamp-1 text-base px-3 text-ellipsis uppercase">
        <p className="text-blue-900  font-medium group-hover:text-white">{className}</p>
      </div>

      <div className="box text-sm flex gap-1 line-clamp-1 text-ellipsis">
        <p className="waktu pl-3 text-blue-900 group-hover:text-white text-sm">{classTime} - </p>
        <p className="waktu text-blue-900 group-hover:text-white text-sm">{classPlace}</p>
      </div>

      <div className="box text-sm flex px-3 gap-2">
        <p className="text-blue-900  text-sm group-hover:text-white">
          {group_code} - {sks} SKS
        </p>
      </div>
    </div>
  );
};

export default CardRoom;
