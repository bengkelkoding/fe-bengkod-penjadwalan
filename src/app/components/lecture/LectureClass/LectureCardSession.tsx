import { Session } from "inspector";
import React from "react";
interface WeekDetail {
  weekD: {
    id: number;
    week: number;
    status_label: string;
    presence_date: string;
  };
  start: string;
  end: string;
  classroom: string;
}

const LectureCardSession: React.FC<WeekDetail> = ({
  weekD,
  start,
  end,
  classroom,
}) => {
  return (
    <div className="shadow-inner flex  justify-between bg-slate-100 py-3 px-5 w-full rounded-lg items-center">
      <div className="info flex flex-col gap-2">
        <div className="flex gap-4 justify-center items-center">
          <p className="text-2xl bg-yellow-300 p-2 rounded-lg font-semibold">
            Pertemuan {weekD.week}{" "}
          </p>
          <p className="p-2 font-bold">({classroom})</p>
        </div>
        <p> {weekD.presence_date}</p>
        <div className="flex">
          <p>{start}</p>
          <span> - </span>
          <p>{end}</p>
        </div>
      </div>
      <div className="button bg-blue-500 rounded-lg p-3">
        <button className="font-bold text-lg text-white">Masuk</button>
      </div>
    </div>
  );
};

export default LectureCardSession;
