import React from "react";

interface DataRiwayatProps {
  className: string;
  dateAbsent: string;
  classTime: string;
  classPlace: string;
  statusAbsent: "Absent" | "Hadir" | "Izin";
}

const DataRiwayat: React.FC<DataRiwayatProps> = ({ className, dateAbsent, classTime, classPlace, statusAbsent }) => {
  const colors = { Absent: "bg-red-500", Hadir: "bg-green-500", Izin: "bg-orange-500" };
  return (
    <div className="flex justify-between mt-4 bg-white rounded-2xl">
      <div className="px-3 py-2">
        <p className="font-semibold text-blue-900 text-sm">{className}</p>
        <div className="flex gap-2">
          <p className="text-blue-900 text-[13.5px]">{dateAbsent}</p>
          <p className="text-blue-900 text-[13.5px]">{classTime}</p>
        </div>

        <p className="text-blue-900 text-[13.5px] -mt-1">{classPlace}</p>
      </div>

      <div className="font-semibold text-sm text-center rounded-xl text-white ">
        <p className={`${colors[statusAbsent]} px-3 py-2 rounded-tr-xl rounded-bl-xl rounded-sm`}>{statusAbsent}</p>
      </div>
    </div>
  );
};

export default DataRiwayat;
