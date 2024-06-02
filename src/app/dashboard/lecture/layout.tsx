"use client";
import "flowbite";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import LectureNavigation from "@/app/components/lecture/LectureNavigation";
import LectureAside from "@/app/components/lecture/LectureAside";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LectureNavigation />
        <LectureAside />
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed h-full rounded-lg dark:border-gray-700 mt-14">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
