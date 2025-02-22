"use client";

import React, { useState, useEffect, useCallback } from "react";
import QrScanner from "qr-scanner";
import ButtomNavigation from "@/app/components/ButtomNavigation";
import useSendResultScan from "@/app/api/ScanStudent";
import Link from "next/link";

export default function DashboardPage() {
  const [btnScan, setBtnScan] = useState(false);
  const [scanner, setScanner] = useState<QrScanner | null>(null);
  const { statusSend, sendResultScan } = useSendResultScan();

  const stopCamera = () => {
    const videoElement = document.getElementById("scanView") as HTMLVideoElement | null;
    if (videoElement) {
      const stream = videoElement.srcObject as MediaStream;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      videoElement.srcObject = null;
      console.log("Camera stopped.");
    }
  };

  const submitResultScan = useCallback(
    async (code: string) => {
      console.log("Hasil Scan: ", code);
      if (code) {
        setBtnScan(false);
        setScanner(null);
        stopCamera();
        await sendResultScan(code);
      }
    },
    [sendResultScan]
  );

  const scanNow = useCallback(
    async (isScan: boolean) => {
      setBtnScan(isScan);

      if (scanner) {
        if (!isScan) {
          scanner.stop();
          scanner.destroy();
          setScanner(null);
          stopCamera();
          console.log("Scanner stopped.");
        } else {
          console.log("Scanner is already running.");
        }
        return;
      }

      if (isScan) {
        const videoElement = document.getElementById("scanView") as HTMLVideoElement | null;
        if (videoElement) {
          const newScanner = new QrScanner(
            videoElement,
            (result) => {
              newScanner.stop();
              newScanner.destroy();
              submitResultScan(result.data);
            },
            {
              onDecodeError: (error) => {
                console.error("Decode error: ", error);
              },
              maxScansPerSecond: 1,
              highlightScanRegion: true,
              highlightCodeOutline: true,
              returnDetailedScanResult: true,
            }
          );
          setScanner(newScanner);
          await newScanner.start();
          console.log("Scanner started.");
        } else {
          console.error("Video element not found!");
        }
      }
    },
    [scanner, submitResultScan]
  );

  useEffect(() => {
    const button = document.getElementById("fab");
    if (button) {
      const handleClick = () => scanNow(!btnScan);
      button.addEventListener("click", handleClick);
      return () => {
        button.removeEventListener("click", handleClick);
      };
    }
  }, [btnScan, scanNow]);

  useEffect(() => {
    const videoElement = document.getElementById("scanView") as HTMLVideoElement | null;
    if (videoElement) {
      const handleVideoPlay = () => {
        if (btnScan) {
          scanNow(true);
        }
      };

      videoElement.addEventListener("canplay", handleVideoPlay);

      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoElement.srcObject = stream;
        })
        .catch((err) => {
          console.error("Error accessing the camera: ", err);
        });

      return () => {
        videoElement.removeEventListener("canplay", handleVideoPlay);
        if (!btnScan) {
          stopCamera();
        }
      };
    }
  }, [btnScan, scanNow]);

  useEffect(() => {
    if (statusSend === 200) {
      console.log("success");
    } else {
      console.log("failed");
    }
  }, [statusSend]);

  return (
    <div className="flex flex-col min-h-screen px-4 pb-24 bg-slate-300 w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
      <p className="text-center font-semibold rounded-br-[35px] rounded-bl-[35px] bg-blue-900 text-white text-2xl py-5 px-8 -mx-4">Scan QR Code</p>
      <div className="flex flex-col gap-3 items-center pt-16">
        {btnScan ? (
          <video id="scanView" className="w-full h-full border-dotted border-2 border-gray-400" autoPlay playsInline></video>
        ) : (
          <div className="bg-white px-4 rounded-3xl mt-20">
            <svg height="200px" width="200px" fill="#000000" viewBox="0 0 24 24" id="scan" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path id="secondary" d="M21,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" style={{ fill: "#5da4d0" }}></path>
                <path
                  id="primary"
                  d="M3,8A1,1,0,0,1,2,7V4A2,2,0,0,1,4,2H7A1,1,0,0,1,7,4H4V7A1,1,0,0,1,3,8ZM22,7V4a2,2,0,0,0-2-2H17a1,1,0,0,0,0,2h3V7a1,1,0,0,0,2,0ZM8,21a1,1,0,0,0-1-1H4V17a1,1,0,0,0-2,0v3a2,2,0,0,0,2,2H7A1,1,0,0,0,8,21Zm14-1V17a1,1,0,0,0-2,0v3H17a1,1,0,0,0,0,2h3A2,2,0,0,0,22,20Z"
                  style={{ fill: "#315b90" }}
                ></path>
              </g>
            </svg>
          </div>
        )}

        <button id="fab" className={`hover:text-white hover:bg-blue-900 transition duration-200 px-1 py-2 w-56 mt-36 rounded-2xl font-semibold text-blue-900 uppercase ${btnScan ? "bg-pink-600" : "bg-white"}`}>
          {btnScan ? "⏹" : "SCAN"}
        </button>

        <Link href="/dashboard/student/riwayat/formizin">
          <button className="hover:text-white hover:bg-blue-900 transition duration-200 bg-white px-1 py-2 w-56 rounded-2xl font-semibold text-blue-900 uppercase">IZIN</button>
        </Link>
      </div>
      <ButtomNavigation />
    </div>
  );
}
