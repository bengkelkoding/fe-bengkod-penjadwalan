// app/dashboard/[room]/page.tsx
"use client";
import ButtomNavigation from "@/app/components/ButtomNavigation";
import ClassDetail from "@/app/components/classroom/ClassDetail";
import { useParams } from "next/navigation";
import React from "react";

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

// Contoh data kelas
const classData: ClassData[] = [
  {
    id: "1",
    name: "Metodelogi Penelitian",
    place: "(H.3.4)",
    day: "Senin",
    time: "09:00 ",
    group_code: "A11.123",
    sks: 3,
    LectureName: "Budi Yahya",
    LectureNip: 123456,
    LecturePhone: "0819919213213",
  },
  {
    id: "2",
    name: "Kecerdasan Buatan",
    place: "(H.3.4)",
    day: "Selasa",
    time: "13:00 ",
    group_code: "A11.456",
    sks: 2,
    LectureName: "Budi Yahya",
    LectureNip: 123456,
    LecturePhone: "0819919213213",
  },
  {
    id: "3",
    name: "Kalkulus",
    place: "(H.3.4)",
    day: "Rabu",
    time: "10:00 ",
    group_code: "A11.789",
    sks: 4,
    LectureName: "Budi Yahya",
    LectureNip: 123456,
    LecturePhone: "0819919213213",
  },
  {
    id: "4",
    name: "Jaringan Komputer",
    place: "(H.3.4)",
    day: "Kamis",
    time: "14:00 ",
    group_code: "A11.012",
    sks: 3,
    LectureName: "Budi Yahya",
    LectureNip: 123456,
    LecturePhone: "0819919213213",
  },
  {
    id: "5",
    name: "Pengolahan Citra Digital",
    place: "(H.3.4)",
    day: "Jumat",
    time: "11:00 ",
    group_code: "A11.345",
    sks: 1,
    LectureName: "Budi Yahya",
    LectureNip: 123456,
    LecturePhone: "0819919213213",
  },
  {
    id: "6",
    name: "Dasar Pemrograman",
    place: "(H.3.4)",
    day: "Senin",
    time: "15:00 ",
    group_code: "A11.678",
    sks: 2,
    LectureName: "Budi Yahya",
    LectureNip: 123456,
    LecturePhone: "0819919213213",
  },
];

const ClassDetailPage = () => {
  const { room } = useParams(); // disesuaikan dengan folder nya kalo [user] maka user  tapi kalo room maka room

  // Mencari data kelas yang sesuai dengan id dari URL
  const selectedClass = classData.find((kelas) => kelas.id === room);

  if (!selectedClass) {
    return <div>kelas tidak ditemukan</div>;
  }

  return (
    <div className="box flex flex-col min-h-screen">
      <ClassDetail
        classId={selectedClass.id}
        className={selectedClass.name}
        classLecture={selectedClass.LectureName}
        classNip={selectedClass.LectureNip}
        classLecturePhone={selectedClass.LecturePhone}
      />
      <ButtomNavigation />
    </div>
  );
};

export default ClassDetailPage;
