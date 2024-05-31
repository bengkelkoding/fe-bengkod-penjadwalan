import React from "react";
import DataIzin from "./DataIzin";

interface RiwayatDataIzin {
  id: string;
  name: string;
  date: string;
  time: string;
  place: string;
  status: "Accepted" | "Rejected" | "Waiting";
}

interface CardRiwayatIzinProps {
  classes: RiwayatDataIzin[];
}

const CardRiwayat: React.FC<CardRiwayatIzinProps> = ({ classes }) => {
  return (
    <div>
      {classes.map((riwayat) => (
        <li className="list-none" key={riwayat.id}>
          <DataIzin className={riwayat.name} dateIzin={riwayat.date} classTime={riwayat.time} classPlace={riwayat.place} statusIzin={riwayat.status} />
        </li>
      ))}
    </div>
  );
};

export default CardRiwayat;
