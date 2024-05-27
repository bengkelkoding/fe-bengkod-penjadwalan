import React from "react";
import dataLclassroom from "../../../../../public/utils/dataLectureClass";
import LectureCardClassroom from "@/app/components/lecture/LectureClass/LectureCardClassroom";
import Link from "next/link";
export default function page() {
  const warna = ["#FF8C00", "#8A2BE2", "#7CFC00", "#FFD700", "#00FA9A"];
  console.log("Isi array warna:", warna);
  return (
    <>
      {/* list kelas */}
      <h2 className="bg-white my-5 px-2 rounded-full text-sm ">Daftar Kelas</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataLclassroom.map((kelas) => (
          <li className="" key={kelas.id}>
            <Link href={`/dashboard/lecture/room/${kelas.id}`}>
              {/* card room */}
              <LectureCardClassroom
                ClassName={kelas.name}
                ClassGroupCode={kelas.groupCode}
                ClassTime={kelas.time}
                ClassPlace={kelas.place}
                ClassStudentCount={kelas.studentCount}
                ClassMeetings={kelas.meetings}
                ClassMeetingsStatus={kelas.meetingsStatus}
                ClassBg={"#ffffff"}
              />
            </Link>
          </li>
        ))}
      </ul>
      {/* kelas -  1 .. N */}
    </>
  );
}
