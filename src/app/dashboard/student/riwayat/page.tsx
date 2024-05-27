"use client";
import React, { useState } from "react";
// import CardProfile from "../components/CardProfile";
// import CardClassroom from "../components/CardClassroom";
// import ButtomNavigation from "../components/ButtomNavigation";
import CardIzin from "@/app/components/CardIzin";
import CardRiwayat from "@/app/components/CardRiwayat";
import ButtomNavigation from "@/app/components/ButtomNavigation";

type StatusType = "Absent" | "Hadir" | "Izin";

interface RiwayatData {
  id: string;
  name: string;
  date: string;
  time: string;
  place: string;
  status: StatusType;
}

type StatusIzinType = "Accepted" | "Rejected" | "Waiting";

interface RiwayatDataIzin {
  id: string;
  name: string;
  date: string;
  time: string;
  place: string;
  status: StatusIzinType;
}

export default function RiwayatPage() {
  const [activeTab, setActiveTab] = useState("riwayatAbsen");

  const riwayatDataAbsen: RiwayatData[] = [
    {
      id: "1",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Hadir",
    },
    {
      id: "2",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Izin",
    },
    {
      id: "3",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Hadir",
    },
    {
      id: "4",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Absent",
    },
    {
      id: "5",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Hadir",
    },
    {
      id: "6",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Hadir",
    },
    {
      id: "7",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Izin",
    },
    {
      id: "8",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Hadir",
    },
    {
      id: "9",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Absent",
    },
    {
      id: "10",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Hadir",
    },
    {
      id: "11",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Hadir",
    },
    {
      id: "12",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Hadir",
    },
    {
      id: "13",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Hadir",
    },
  ];
  const riwayatDataIzin: RiwayatDataIzin[] = [
    {
      id: "1",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Accepted",
    },
    {
      id: "2",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Rejected",
    },
    {
      id: "3",
      name: "Metodelogi Penelitian",
      date: "12 April 2024",
      time: "09:00 - 12:00",
      place: "H.10.99",
      status: "Waiting",
    },
  ];

  return (
    <div className="px-4 bg-slate-300 w-full sm:w-auto  md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto overflow-y-auto">
      <p className="text-center font-semibold rounded-br-[35px] rounded-bl-[35px] bg-blue-900 text-white text-2xl py-5 px-8  -mx-4">Riwayat</p>
      <div className="bg-slate-200 px-4 pt-2 pb-4 mt-8 rounded-3xl mb-[100px]">
        <div className="flex justify-center mt-6 gap-2">
          <p className={`font-semibold px-5 py-2  text-sm rounded-3xl ${activeTab === "riwayatAbsen" ? "bg-blue-900 text-white" : "bg-white text-blue-900"} cursor-pointer`} onClick={() => setActiveTab("riwayatAbsen")}>
            Riwayat Kehadiran
          </p>
          <p className={`font-semibold px-5 py-2  text-sm rounded-3xl ${activeTab === "riwayatIzin" ? "bg-blue-900 text-white" : "bg-white text-blue-900"} cursor-pointer`} onClick={() => setActiveTab("riwayatIzin")}>
            Riwayat Izin
          </p>
        </div>
        {activeTab === "riwayatAbsen" && <CardRiwayat classes={riwayatDataAbsen} />}
        {activeTab === "riwayatIzin" && <CardIzin classes={riwayatDataIzin} />}
      </div>
      <ButtomNavigation />
    </div>
  );
}
