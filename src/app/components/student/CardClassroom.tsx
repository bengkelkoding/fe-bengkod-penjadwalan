// components/CardClassroom.tsx
import Link from "next/link";
import React from "react";
import CardRoom from "./CardRoom";
import ButtomNavigation from "../ButtomNavigation";
import { DataStudentSchedule } from "@/model/ModelStudentSchedule";

interface CardClassroomProps {
  classes: DataStudentSchedule[];
}

const CardClassroom: React.FC<CardClassroomProps> = ({ classes }) => {
  return (
    <div className="bg-slate-200 px-4 pt-2 pb-4 mt-8 rounded-3xl">
      <h2 className="p-2 bg-white -mt-6 mb-4 w-28 rounded-2xl text-center font-semibold text-blue-900 text-sm">Daftar Kelas</h2>
      <ul className="grid grid-cols-2 gap-4">
        {classes.map((kelas) => (
          <li className="" key={kelas.id}>
            <Link href={`/dashboard/student/${kelas.id}`}>
              {/* card room */}
              <CardRoom
                className={kelas.nama_matkul}
                classPlace={kelas.classroom}
                classDay={kelas.day}
                classTime={kelas.time_start}
                group_code={kelas.kode_kelompok}
                sks={kelas.sks}
                LectureName={kelas.dosen.fullname}
                LectureNip={kelas.dosen.nip}
              />
            </Link>
          </li>
        ))}
      </ul>
      {/* <ButtomNavigation /> */}
    </div>
  );
};

export default CardClassroom;
