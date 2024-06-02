import { Session } from "inspector";
import React from "react";
interface WeekDetail {
  weekD: {
    id: number;
    week: number;
    status_label: string;
    presence_date: string;
  };
}

const LectureCardSession: React.FC<WeekDetail> = ({ weekD }) => {
  return (
    <div className="shadow-inner flex justify-between py-3 px-5 w-full rounded-lg items-center">
      <div className="info">
        <p className="text-xl font-semibold">Pertemuan {weekD.week} </p>
        <p>{weekD.presence_date}</p>
      </div>
      <div className="button">
        <button>click me</button>
      </div>
    </div>
  );
};

export default LectureCardSession;
