"use client";

import React, { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const StudentGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isStudentLogged, setIsStudentLogged] = useState(false);
  const item = localStorage.getItem("user");
  const user = item ? JSON.parse(item) : null;

  const cekLogged = useCallback(() => {
    const type = user.type;
    if (type !== "MAHASISWA") {
      if (type === "DOSEN") {
        router.replace(`${process.env.NEXT_PUBLIC_HOST_CLIENT}/dashboard/lecture`);
      } else {
        router.replace(`${process.env.NEXT_PUBLIC_HOST_CLIENT}`);
      }
    } else {
      setIsStudentLogged(true);
    }
  }, [user, router]);

  useEffect(() => {
    cekLogged();
  }, [cekLogged]);

  if (!isStudentLogged) {
    return null;
  }

  return <>{children}</>;
};

export default StudentGuard;
