import React from "react";

interface DataIzinProps {
  className: string;
  dateIzin: string;
  classTime: string;
  classPlace: string;
  statusIzin: "Accepted" | "Rejected" | "Waiting";
}

const DataIzin: React.FC<DataIzinProps> = ({ className, dateIzin, classTime, classPlace, statusIzin }) => {
  const colors = { Accepted: "bg-green-500", Rejected: "bg-red-500", Waiting: "bg-orange-500" };
  return (
    <div className="flex justify-between mt-4 bg-white rounded-2xl">
      <div className="px-3 py-2">
        <p className="font-semibold text-blue-900 text-sm">{className}</p>
        <div className="flex gap-2">
          <p className="text-blue-900 text-[13.5px]">{dateIzin}</p>
          <p className="text-blue-900 text-[13.5px]">{classTime}</p>
        </div>

        <p className="text-blue-900 text-[13.5px] -mt-1">{classPlace}</p>
        {statusIzin === "Rejected" && <p className="text-blue-900 text-[13.5px] mt-2 ">Keterangan Ditolak : </p>}
      </div>

      <div className="font-semibold text-center rounded-xl text-white ">
        <p className={`${colors[statusIzin]} text-sm  px-3 py-2 rounded-tr-xl rounded-bl-xl rounded-sm`}>{statusIzin}</p>
        {statusIzin === "Rejected" && (
          <a href="">
            <p className="text-blue-900 underline text-sm font-normal text-[13.5px] px-3 mt-9">Ajukan Kembali</p>
          </a>
        )}
      </div>
    </div>
  );
};

export default DataIzin;
