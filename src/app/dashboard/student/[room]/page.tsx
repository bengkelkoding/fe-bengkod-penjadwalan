// app/dashboard/[room]/page.tsx
"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import ButtomNavigation from "@/app/components/ButtomNavigation";
import ClassDetail from "@/app/components/classroom/ClassDetail";
import useGetStudentSchedule from "@/app/api/StudentSchedule";

const ClassDetailPage = () => {
  const { room } = useParams(); // disesuaikan dengan folder nya kalo [user] maka user  tapi kalo room maka room

  const { isLoading, scheduleDetails, getScheduleDetail } = useGetStudentSchedule();
  useEffect(() => {
    getScheduleDetail(room.toString());
  }, [getScheduleDetail, room]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="box flex flex-col min-h-screen">
      <ClassDetail
        classId={scheduleDetails?.schedule.id}
        className={scheduleDetails?.schedule.nama_matkul}
        classLecture={scheduleDetails?.schedule.dosen.fullname}
        classNip={scheduleDetails?.schedule.dosen.nip}
        presence={scheduleDetails?.presences}
      />
      <ButtomNavigation />
    </div>
  );
};

export default ClassDetailPage;
