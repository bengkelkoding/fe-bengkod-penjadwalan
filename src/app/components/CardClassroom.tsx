// components/CardClassroom.tsx
import Link from "next/link";
import React from "react";
import CardRoom from "./CardRoom";
import ButtomNavigation from "./ButtomNavigation";

interface ClassData {
  id: string;
  name: string;
  place: string;
  day: string;
  time: string;
  group_code: string;
  sks: number;
  LectureName: string;
  LectureNip: number;
  LecturePhone: string;
}

interface CardClassroomProps {
  classes: ClassData[];
}

const CardClassroom: React.FC<CardClassroomProps> = ({ classes }) => {
  return (
    <div className="w-full ">
      <h2 className="bg-white w-1/3 text-center my-5 px-2 rounded-full text-sm ">
        Daftar Kelas
      </h2>
      <ul className="grid grid-cols-2 gap-4">
        {classes.map((kelas) => (
          <li className="" key={kelas.id}>
            <Link href={`/dashboard/${kelas.id}`}>
              {/* card room */}
              <CardRoom
                className={kelas.name}
                classPlace={kelas.place}
                classDay={kelas.day}
                classTime={kelas.time}
                group_code={kelas.group_code}
                sks={kelas.sks}
                LectureName={kelas.LectureName}
                LectureNip={kelas.LectureNip}
                LecturePhone={kelas.LecturePhone}
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
