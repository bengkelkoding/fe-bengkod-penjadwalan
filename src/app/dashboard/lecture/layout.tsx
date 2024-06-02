"use client";
import "flowbite";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import LectureNavigation from "@/app/components/lecture/LectureNavigation";
import LectureAside from "@/app/components/lecture/LectureAside";
import AuthGuard from "@/utils/guard/auth-guard";
import LectureGuard from "@/utils/guard/lecture-guard";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <LectureGuard>
        <LectureNavigation />
        <LectureAside />
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed h-[88vh] rounded-lg dark:border-gray-700 mt-14">
            <main>{children}</main>
          </div>
        </div>
      </LectureGuard>
    </AuthGuard>
  );
}
