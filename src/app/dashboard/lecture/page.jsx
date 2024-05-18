import CardDetailToday from "@/app/components/lecture/CardDetailToday";
import LectureGrafik from "@/app/components/lecture/LectureGrafik";
import React from "react";

export default function page() {
  return (
    // awal dashboard/lecture

    <div className="flex h-full flex-wrap items-center justify-center">
      <div className=" h-auto lg:h-3/4 w-full grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 grid-rows-1  gap-5">
        <div className="lg:row-span-2 row-span-1 mx-auto justify-center ">
          <LectureGrafik />
        </div>
        <div className="lg:col-span-2 h-full">
          <CardDetailToday />
        </div>
        {/* total kelas */}
        <div className="py-5 lg:py-0 lg:col-start-2 lg:row-start-2 gap-5 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-500 rounded-md text-white shadow">
          <h1 className="font-medium text-2xl ">Total Kelas</h1>
          <p className="info-kelas text-7xl font-bold">12</p>
          <button
            type="button"
            className="text-blue-700 bg-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 px-10 py-2 font-medium rounded-full text-sm  text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Lihat kelas
          </button>
        </div>
        {/* total mahasiswa */}
        <div className="py-5 lg:py-0 lg:col-start-3 lg:row-start-2 gap-5 flex flex-col items-center justify-center bg-gradient-to-r to-emerald-500 from-emerald-900 rounded-md text-white shadow">
          <h1 className="font-medium text-2xl ">Mahasiswa</h1>
          <p className="info-kelas text-7xl font-bold">120</p>
          <button
            type="button"
            className="text-green-700 bg-white hover:bg-green-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 px-10 py-2 font-medium rounded-full text-sm  text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Lihat Mahasiswa
          </button>
        </div>{" "}
      </div>
    </div>
  );
}
