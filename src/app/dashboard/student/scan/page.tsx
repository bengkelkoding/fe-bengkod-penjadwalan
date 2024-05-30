import React from "react";

import ButtomNavigation from "@/app/components/ButtomNavigation";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen px-4 pb-24 bg-slate-300 w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
      <p className="text-center font-semibold rounded-br-[35px] rounded-bl-[35px] bg-blue-900 text-white text-2xl py-5 px-8 -mx-4">Scan QR Code</p>
      <ButtomNavigation />
    </div>
  );
}
