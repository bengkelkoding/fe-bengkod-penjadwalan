"use client";

import React, { useEffect } from "react";
// import CardProfile from "../components/CardProfile";
// import CardClassroom from "../components/CardClassroom";
// import ButtomNavigation from "../components/ButtomNavigation";
import CardProfile from "@/app/components/student/CardProfile";
import CardClassroom from "@/app/components/student/CardClassroom";
import ButtomNavigation from "@/app/components/ButtomNavigation";
import useGetStudentSchedule from "@/app/api/StudentSchedule";

export default function DashboardPage() {
  const item = localStorage.getItem("user");
  const user = item ? JSON.parse(item) : null;
  const { isLoading, schedules, getSchedule } = useGetStudentSchedule();
  useEffect(() => {
    getSchedule();
  }, [getSchedule]);

  const userData = {
    name: user.fullname,
    nimMhs: user.code,
    linkImg: "https://i.pinimg.com/originals/f5/8a/ac/f58aacd2cddf1a32e2701ba767184f3c.jpg",
  };

  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <div className="flex flex-col min-h-screen px-4 pb-24 bg-slate-300 w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
      <p className="font-extralight rounded-br-[15px] rounded-bl-[15px] bg-blue-900 text-white text-2xl pt-2 pb-12 px-8 -mx-4">Home</p>
      <CardProfile name={userData.name} nimMhs={userData.nimMhs} linkImg={userData.linkImg} />
      <CardClassroom classes={schedules} />
      <ButtomNavigation />
    </div>
  );
}
