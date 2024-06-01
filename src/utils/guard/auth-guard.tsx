"use client";

import React, { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const isAuthenticated = localStorage.getItem("token");

  const cekLogged = useCallback(() => {
    if (!isAuthenticated) {
      router.replace(`${process.env.NEXT_PUBLIC_HOST_CLIENT}`);
    } else {
      setIsLogged(true);
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    cekLogged();
  }, [cekLogged]);

  if (!isLogged) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
