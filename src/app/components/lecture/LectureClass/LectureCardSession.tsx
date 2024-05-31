import { Session } from "inspector";
import React from "react";
interface WeekDetail {
  weekD: {
    id: number;
    status_label: string;
  };
}

const LectureCardSession: React.FC<WeekDetail> = ({ weekD }) => {
  return (
    <div className="bg-red-100 flex justify-between py-3 px-5 w-full rounded-lg items-center">
      <div className="info">
        <p>pertemuan {weekD.id} </p>
        <p>{weekD.status_label}</p>
      </div>
      <div className="button">
        <button>click me</button>
      </div>
    </div>
  );
};

export default LectureCardSession;
