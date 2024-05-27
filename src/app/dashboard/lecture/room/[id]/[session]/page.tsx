"use client";
import ListTableMhs from "@/app/components/lecture/LectureClass/ListTableMhs";
import ListTableMhsAbsent from "@/app/components/lecture/LectureClass/ListTableMhsAbsent";
import { QRCodeSVG } from "qrcode.react";
import React, { useEffect, useState } from "react";

/*

  1. perlu data mahasiswa yang mengambil kelas ini.

*/

interface SessionProps {
  ListMhs: {
    id: string;
    name: string;
    attendance: boolean;
  }[];
  DetailClass: {
    id: string;
    name: string;
    time: string;
    place: string;
    studentCount: number;
    meetings: number;
    meetingsStatus: "Sesuai" | "Kurang";
    groupCode: string;
    sks: number;
  };
}

const Session: React.FC<SessionProps> = ({ ListMhs, DetailClass }) => {
  const [qrText, setQrText] = useState<string>("");
  const [i, setI] = useState<number>(1);
  const [countdown, setCountdown] = useState<number>(20);

  const generateRandomText = () => {
    const randomText = `tes-absenpertemuan-${i}`;
    setI(i + 1);
    setQrText(randomText);
    console.log(randomText);
  };

  useEffect(() => {
    let qrTimeout: ReturnType<typeof setTimeout> | undefined;
    let countdownInterval: ReturnType<typeof setInterval> | undefined;

    if (qrText) {
      setCountdown(20); // Reset countdown ke 20

      countdownInterval = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000); // Memperbarui countdown setiap 1 detik

      qrTimeout = setTimeout(() => {
        setQrText("");
        clearInterval(countdownInterval); // Menghentikan interval setelah QR Code hilang
      }, 20000);
    }
    return () => {
      if (qrTimeout) {
        clearTimeout(qrTimeout);
      }
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    };
  }, [qrText]);

  return (
    <div className=" flex flex-col w-full ">
      <div className="flex flex-col lg:flex-row justify-between  w-full  ">
        {/* kiri */}
        <div className="up-left flex flex-col gap-2 lg:w-1/2">
          <div className="profil-cardLecture flex flex-col gap-2 h-[20vh] rounded-lg p-2 bg-gradient-to-r from-[#3263de]  to-[#6aa2f0] ">
            <div className="info-week gap-2 bg-slate-50 rounded-lg w-[80%] lg:w-[45%] flex p-2">
              <div className="rounded-full w-[13%]  bg-orange-300"></div>
              <h1 className="font-semibold text-2xl">Pertemuan x</h1>
            </div>
            <div className="info-dosen text-white text-lg">
              <h1 className="font-bold">Muhamad Alif Aj</h1>
              <h1>A11222</h1>
            </div>
          </div>
          <div className="detail-info flex gap-2">
            <div className="info-izin rounded-lg w-full flex items-center flex-col bg-[#baf8db] p-2 ">
              <p className="font-bold text-4xl text-[#3263de]">9</p>
              <p className="font-medium text-xl text-[#1b2650] ">orang</p>
            </div>
            <div className="jml-mhs rounded-lg  w-full flex items-center flex-col bg-yellow-100 p-2 ">
              <p className="font-bold text-4xl text-[#3263de]">9</p>
              <p className="font-medium text-xl text-[#1b2650] ">orang</p>
            </div>
          </div>
          <button
            className="btn-generate  w-1/4  mt-5 p-3 font-semibold text-white border-2 border-slate-200 bg-[#4780ea] 4780ea hover:bg-[#3263de] rounded-lg"
            onClick={generateRandomText}
          >
            Genetate Qr
          </button>
        </div>
        {/* kanan */}
        <div className="up-right lg:w-1/3">
          <div className="canvas-qr">
            <div className=" flex items-center justify-center border-2 border-gray-200 border-dashed h-[50vh] rounded-lg dark:border-gray-700">
              {qrText ? (
                <div className="w-full">
                  <QRCodeSVG className="w-full" height={300} value={qrText} />
                  <p className="pt-5 text-center">
                    QR Code akan hilang dalam {countdown} detik
                  </p>
                </div>
              ) : (
                <p>QR Code belum dihasilkan</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="list-mhs flex flex-col ">
        <div className="search-compo flex justify-between py-3">
          {/* <p className="font-semi text-2xl">List</p> */}
          <div className="search-key">
            <label className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for Mhs"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-3">
          <div className="left-belumabsen w-full lg:w-1/2">
            <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 p-3 bg-white dark:bg-gray-900">
              <div className="text-center w-full flex justify-left ">
                <p className="bg-yellow-200 p-1 w-3/12 rounded-lg">List mhs</p>
              </div>
            </div>
            <ListTableMhs />
          </div>
          <div className="right-sudahabsen w-full lg:w-1/2">
            <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 p-3 bg-white dark:bg-gray-900">
              <div className="text-center w-full flex justify-left ">
                <p className="bg-yellow-200 p-1 w-3/12 rounded-lg">List Izin</p>
              </div>
            </div>
            <ListTableMhsAbsent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session;
