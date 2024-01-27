"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

interface ItemProps {
  label: string;
  icon: ReactElement;
  href: string;
  fillIcon: ReactElement;
}

const FootbarItem = ({ label, icon, href, fillIcon }: ItemProps) => {
  const pathname = usePathname();
  return (
    <div className="flex items-center w-full h-[50px]">
      <Link
        href={href}
        className="flex flex-col items-center w-full h-[50px] hover:bg-neutral-800 transition"
      >
        {pathname === href ? fillIcon : icon}
        <span
          className={
            pathname === href
              ? "text-xs ml-[1px] text-blue-500"
              : "text-xs ml-[1px]"
          }
        >
          {label}
        </span>
      </Link>
    </div>
  );
};

export default FootbarItem;
