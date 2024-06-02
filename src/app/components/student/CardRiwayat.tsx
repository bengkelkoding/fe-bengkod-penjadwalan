import React from "react";
import DataRiwayat from "./DataRiwayat";

interface RiwayatData {
  id: string;
  name: string;
  date: string;
  time: string;
  place: string;
  status: "Absent" | "Hadir" | "Izin";
}

interface CardRiwayatProps {
  classes: RiwayatData[];
}

const CardRiwayat: React.FC<CardRiwayatProps> = ({ classes }) => {
  return (
    <div>
      {classes.map((riwayat) => (
        <li className="list-none" key={riwayat.id}>
          <DataRiwayat className={riwayat.name} dateAbsent={riwayat.date} classTime={riwayat.time} classPlace={riwayat.place} statusAbsent={riwayat.status} />
        </li>
      ))}
    </div>
  );
};

export default CardRiwayat;
