"use client";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="fixed top-0 left-0 h-screen bg-gray-500 flex flex-col w-40 pl-3 ">
      <div className="py-3">
        <div className="text-2xl font-extrabold leading-5">
          <span className="text-orange-500">Task</span>mate
        </div>
        <div className="text-[10px] font-[600] text-gray-300">
          Focus, Priority, Execute
        </div>
      </div>
      <div>User</div>
      <div className="flex flex-col">
        <Link href="./dashboard">overview</Link>
        <Link href="./dashboard">TaskList</Link>
        <Link href="/dashboard/project/">Project Overview</Link>
        <Link href="./dashboard">Calender</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
