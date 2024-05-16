import React from "react";

interface CardLectureProps {
  ClassName: string;
  LectureName: string;
  LectureNip: number;
  LecturePhone: string;
}

const CardLecture: React.FC<CardLectureProps> = ({
  ClassName,
  LectureName,
  LectureNip,
  LecturePhone,
}) => {
  return (
    <div className=" -mt-9 bg-white rounded-3xl p-4 flex">
      <div className="bg-blue-900 py-4 rounded-full w-14 h-14 "></div>
      <div className="ml-4 ">
        <div className="text-blue-900 text-sm  rounded-2xl font-semibold uppercase">
          {" "}
          {ClassName}
        </div>
        <div className="text-blue-900 text-sm ">{LectureName} </div>
        <div className="text-blue-900 text-sm ">12.30 * H.5.3 </div>
        <div className="text-blue-900 text-sm ">{LecturePhone} </div>
      </div>
    </div>
  );
};

export default CardLecture;
