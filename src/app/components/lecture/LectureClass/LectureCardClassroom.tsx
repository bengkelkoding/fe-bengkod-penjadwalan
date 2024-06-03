"use client";
import React from "react";

interface LectureCardProps {
  id: number;
  kodeMatkul: string;
  namaMatkul: string;
  kodeKelompok: string;
  sks: number;
  day: string;
  jumlahMahasiswa: number;
  timeStart: string;
  timeEnd: string;
  classroom: string;
  dosen: {
    fullname: string;
    nip: string;
  };
}

const LectureCardClassroom = ({
  kodeMatkul,
  namaMatkul,
  kodeKelompok,
  sks,
  day,
  jumlahMahasiswa,
  timeStart,
  timeEnd,
  classroom,
  dosen,
}: LectureCardProps) => {
  return (
    <>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">{namaMatkul}</h1>
        <p className="font-normal mb-2 text-xs text-gray-700 dark:text-gray-400">Teori | {sks} SKS </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-2">
          <div>
            <p className="text-xs font-medium text-gray-700 dark:text-white">Kode Kelompok</p>
            <p className="text-sm font-bold text-gray-700 dark:text-white">{kodeKelompok}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-700 dark:text-white">Kode Mata Kuliah</p>
            <p className="text-sm font-bold text-gray-700 dark:text-white">{kodeMatkul}</p>
          </div>
        </div>
        <div className="block max-w-sm p-2 bg-white border rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-2">
            <div>
              <p className="text-sm font-bold text-gray-700 dark:text-white">{day}</p>
              <p className="flex text-xs font-medium text-gray-700 dark:text-white">
                <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                </svg>
               <span>  {timeStart} - {timeEnd}</span>
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-700 dark:text-white">Ruang</p>
              <p className="text-sm font-bold text-gray-700 dark:text-white">{classroom}</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mb-1 mt-2">
          <span className="text-xs font-medium text-gray-700 dark:text-white">Presentase Pertemuan</span>
          <span className="text-xs font-medium text-gray-700 dark:text-white">45%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
          <div className="bg-gray-700 h-1 rounded-full" style={{width: '45%'}}></div>
        </div>
      </div>
    </>
   
  );
};

export default LectureCardClassroom;
