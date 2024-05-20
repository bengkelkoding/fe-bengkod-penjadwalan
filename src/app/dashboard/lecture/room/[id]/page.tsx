"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dataLclassroom from "../../../../../../public/utils/dataLectureClass";
import { useQRCode } from "next-qrcode";

interface ClassData {
  id: string;
  name: string;
  time: string;
  place: string;
  studentCount: number;
  meetings: number;
  meetingsStatus: "Sesuai" | "Kurang";
  groupCode: string;
}

const RoomDetail = () => {
  const { id } = useParams();
  const { Canvas } = useQRCode();
  const selectedClass: ClassData | undefined = dataLclassroom.find(
    (kelas: ClassData) => kelas.id === id
  );
  const [qrText, setQrText] = useState<string>("");
  const [i, setI] = useState<number>(1);
  const [countdown, setCountdown] = useState<number>(20);

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

  if (!selectedClass) {
    return <div>kelas tidak ditemukan</div>;
  }

  const generateRandomText = () => {
    const randomText = `${selectedClass.name}-absenpertemuan-${i}`;
    setI(i + 1);
    setQrText(randomText);
    console.log(randomText);
  };

  return (
    <div>
      <p>{selectedClass.name}</p>
      <div className="head-info-room grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="box-1 p-3 bg-blue-200 rounded-lg shadow-md w-full lg:w-[23vw] h-[18vh]">
          Jumlah Mhs
        </div>
        <div className="box-2 p-3 bg-blue-200 rounded-lg shadow-md w-full lg:w-[23vw] h-[18vh]">
          Jumlah pertemuan
        </div>
        <div className="box-3 p-3  bg-blue-200 rounded-lg shadow-md w-full lg:w-[23vw] h-[18vh]">
          Mahasiswa Izin
        </div>
      </div>

      <div className="list-pertemuan"></div>

      <div className="box-qr">
        {qrText ? (
          <>
            <Canvas
              text={qrText}
              options={{
                errorCorrectionLevel: "M",
                margin: 3,
                scale: 4,
                width: 200,
                color: { dark: "#010599FF", light: "#FFBF60FF" },
              }}
            />
            <p>QR Code akan hilang dalam {countdown} detik</p>
          </>
        ) : (
          <p>QR Code belum dihasilkan</p>
        )}
      </div>
      <button onClick={generateRandomText}>Ganti Teks QR Code</button>
    </div>
  );
};

export default RoomDetail;
