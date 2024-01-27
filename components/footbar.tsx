import React from "react";
import FootbarItem from "./footbar-item";
import { More } from "./icons/more";
import { CubeOutline } from "./icons/cube-outline";
import { HomeOutline } from "./icons/home-outline";
import { Bell, PencilLine } from "lucide-react";

const Footbar = () => {
  const items = [
    {
      label: "홈",
      icon: <HomeOutline className="h-5 w-5 mt-1.5" />,
      fillIcon: <HomeOutline className="h-5 w-5 mt-1.5 text-blue-500" />,
      href: "/",
    },
    {
      label: "물건",
      icon: <CubeOutline className="h-5 w-5 mt-1.5" />,
      fillIcon: <CubeOutline className="h-5 w-5 mt-1.5 text-blue-500" />,
      href: "/post",
    },
    {
      label: "작성",
      icon: <PencilLine className="h-5 w-5 mt-1.5" />,
      fillIcon: <PencilLine className="h-5 w-5 mt-1.5 text-blue-500" />,
      href: "/post/create",
    },
    {
      label: "알림",
      icon: <Bell className="h-5 w-5 mt-1.5" />,
      fillIcon: <Bell className="h-5 w-5 mt-1.5 text-blue-500" />,
      href: "/notification",
    },
    {
      label: "더보기",
      icon: <More className="h-5 w-5 mt-1.5" />,
      fillIcon: <More className="h-5 w-5 mt-1.5 text-blue-500" />,
      href: "/more",
    },
  ];
  return (
    <div className="bg-neutral-900 fixed bottom-0 border-t border-zinc-700 w-full max-w-[766px] h-[50px] flex justify-between items-center">
      {items.map((item) => (
        <FootbarItem
          key={item.href}
          label={item.label}
          icon={item.icon}
          href={item.href}
          fillIcon={item.fillIcon}
        />
      ))}
    </div>
  );
};

export default Footbar;
