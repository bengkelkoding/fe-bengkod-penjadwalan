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
}

const LectureCardUnstartSession: React.FC<WeekDetail> = ({
  weekD,
  start,
  end,
}) => {
  return (
    <div className="shadow-inner flex justify-between py-3 px-5 w-full rounded-lg items-center">
      <div className="info">
        <p className="text-xl font-semibold">Pertemuan {weekD.week} </p>
        <p>{weekD.status_label}</p>
        <p>{weekD.presence_date}</p>
        <div className="flex">
          <p>{start}</p>
          <span> - </span>
          <p>{end}</p>
        </div>
      </div>
      <div className="button">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default LectureCardUnstartSession;
