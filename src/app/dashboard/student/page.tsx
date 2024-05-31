import React from "react";
// import CardProfile from "../components/CardProfile";
// import CardClassroom from "../components/CardClassroom";
// import ButtomNavigation from "../components/ButtomNavigation";
import CardProfile from "@/app/components/CardProfile";
import CardClassroom from "@/app/components/CardClassroom";
import ButtomNavigation from "@/app/components/ButtomNavigation";

export default function DashboardPage() {
  const userData = {
    name: "Muhammad Sumbul",
    nimMhs: "A11.2021.12345",
    linkImg: "https://i.pinimg.com/originals/f5/8a/ac/f58aacd2cddf1a32e2701ba767184f3c.jpg",
  };

  const classData = [
    {
      id: "1",
      name: "Metodelogi Penelitian",
      place: "H.3.4",
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
      place: "H.3.4",
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
      place: "H.3.4",
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
      place: "H.3.4",
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
      place: "H.3.4",
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
      place: "H.3.4",
      day: "Senin",
      time: "15:00 ",
      group_code: "A11.678",
      sks: 2,
      LectureName: "Budi Yahya",
      LectureNip: 123456,
      LecturePhone: "0819919213213",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen px-4 pb-24 bg-slate-300 w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
      <p className="font-extralight rounded-br-[15px] rounded-bl-[15px] bg-blue-900 text-white text-2xl pt-2 pb-12 px-8 -mx-4">Home</p>
      <CardProfile name={userData.name} nimMhs={userData.nimMhs} linkImg={userData.linkImg} />
      <CardClassroom classes={classData} />
      <ButtomNavigation />
    </div>
  );
}
