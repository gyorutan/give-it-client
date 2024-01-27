import Footbar from "@/components/footbar";
import Navbar from "@/components/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-zinc-900 text-white">
      <div className="h-full py-[50px] max-w-[768px] mx-auto md:border-x-[1px] border-zinc-700">
        <Navbar />
        <main className="mt-4">{children}</main>
        <Footbar />
      </div>
    </div>
  );
};

export default MainLayout;
