import React from "react";
import CardLecture from "./CardLecture";
import { Presence } from "@/model/ModelStudentScheduleDetail";

interface ClassDetailProps {
  classId?: number;
  className?: string;
  classLecture?: string;
  classNip?: string;
  presence?: Presence[];
}

const ClassDetail: React.FC<ClassDetailProps> = ({ classId, className, classLecture, classNip, presence }) => {
  console.log(classId);
  return (
    <div className="px-4 bg-slate-300 w-full h-full sm:w-auto  md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
      <div className="">
        <div className="">
          <p className=" font-extralight rounded-br-[15px] rounded-bl-[15px] bg-blue-900 text-white text-2xl pt-2 pb-12 px-8 -mx-4">Detail Course</p>
          {/* profil dosen */}
          <div className=""></div>
          <CardLecture ClassName={className} LectureName={classLecture} LectureNip={classNip} />

          <div className="bg-white px-4 pt-2 pb-4 mt-8 rounded-3xl">
            <div className="flex justify-center">
              <svg className="w-[200px]" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="0.5"
                    d="M6.22209 4.60105C6.66665 4.304 7.13344 4.04636 7.6171 3.82976C8.98898 3.21539 9.67491 2.9082 10.5875 3.4994C11.5 4.09061 11.5 5.06041 11.5 7.00001V8.50001C11.5 10.3856 11.5 11.3284 12.0858 11.9142C12.6716 12.5 13.6144 12.5 15.5 12.5H17C18.9396 12.5 19.9094 12.5 20.5006 13.4125C21.0918 14.3251 20.7846 15.011 20.1702 16.3829C19.9536 16.8666 19.696 17.3334 19.399 17.7779C18.3551 19.3402 16.8714 20.5578 15.1355 21.2769C13.3996 21.9959 11.4895 22.184 9.64665 21.8175C7.80383 21.4509 6.11109 20.5461 4.78249 19.2175C3.45389 17.8889 2.5491 16.1962 2.18254 14.3534C1.81598 12.5105 2.00412 10.6004 2.72315 8.86451C3.44218 7.12861 4.65982 5.64492 6.22209 4.60105Z"
                    fill="#1E3A8A"
                  ></path>{" "}
                  <path d="M21.446 7.06901C20.6342 5.00831 18.9917 3.36579 16.931 2.55398C15.3895 1.94669 14 3.34316 14 5.00002V9.00002C14 9.5523 14.4477 10 15 10H19C20.6569 10 22.0533 8.61055 21.446 7.06901Z" fill="#1E3A8A"></path>{" "}
                </g>
              </svg>
            </div>

            <div className="flex justify-center gap-10 mt-6  p-2 rounded-2xl">
              <div className="text-sm text-blue-900 font-semibold">
                <p className="px-2 py-1">Sesi wajib yang dihadiri </p>
                <p className="px-2  ">Batas maksimal tidak hadir</p>
              </div>

              <div className="text-sm font-semibold text-white">
                <p className="px-2  rounded-lg bg-blue-900">4/5</p>
                <p className="px-2  rounded-lg bg-blue-900 mt-2">2/3</p>
              </div>
            </div>

            <div className="flex justify-center px-2 mt-6 mb-2 ">
              <div className="">
                <p className="font-semibold text-blue-900 text-[13px] text-center ">Hadir</p>
                <p className="font-semibold text-sm px-6 py-1 mt-1 text-center rounded-xl bg-green-400 text-white">4</p>
              </div>

              <div className="mx-8">
                <p className="font-semibold text-blue-900 text-[13px] text-center">Izin</p>
                <p className="font-semibold text-sm px-6 py-1 mt-1 text-center rounded-xl bg-orange-400 text-white">2</p>
              </div>

              <div className="">
                <p className="font-semibold text-blue-900 text-[13px] text-center">Absent</p>
                <p className="font-semibold text-sm px-6 py-1 mt-1 text-center rounded-xl bg-red-500 text-white">3</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-200 px-4 pt-2 pb-4 mt-8 rounded-3xl mb-[100px]">
            {presence?.map((i) => (
              <div key={i.id}>
                <div className="flex justify-between  mt-4 bg-white rounded-2xl">
                  <div className="px-3 py-2">
                    <p className="font-semibold text-blue-900 text-sm">Pertemuan ke-{i.week}</p>
                    <p className="text-blue-900 text-[13.5px]">{i.presence_date}</p>
                  </div>

                  <div className="font-semibold text-sm text-center rounded-xl   text-white ">
                    <p className="bg-green-500 px-3 py-2  rounded-tr-xl rounded-bl-xl rounded-sm">{i.status_label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ClassDetail;
