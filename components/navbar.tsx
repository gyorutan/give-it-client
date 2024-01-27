"use client";

import React from "react";
import { User } from "./icons/user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import useAuth from "@/store/useAuth";
import { useRouter } from "next/navigation";
import { ArrowBack } from "./icons/arrow-back";

const Navbar = () => {
  const router = useRouter();
  const auth = useAuth();

  return (
    <div className="fixed bg-zinc-900 z-50 top-0 mx-auto border-b border-zinc-700 w-full px-3 max-w-[766px] h-[50px] flex justify-between items-center">
      <div
        className="cursor-pointer"
        onClick={() => {
          router.back();
        }}
      >
        <ArrowBack className="h-6 w-6" />
      </div>
      <span className="text-xl font-bold">GIVE IT !</span>
      {auth.auth === false ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <User className="h-6 w-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-white mr-2 mt-3 bg-zinc-700 border-zinc-600">
            <DropdownMenuItem
              asChild
              className="cursor-pointer focus:bg-zinc-600 focus:text-white"
            >
              <Link href={"/auth/login"}>로그인</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-zinc-600" />
            <DropdownMenuItem
              asChild
              className="cursor-pointer focus:bg-zinc-600 focus:text-white"
            >
              <Link href={"/auth/signup"}>회원가입</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <User className="h-6 w-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-white mr-2 mt-3 bg-zinc-700 border-zinc-600">
            <DropdownMenuLabel>{auth.name} 님</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-600" />
            <DropdownMenuItem
              asChild
              className="cursor-pointer focus:bg-zinc-600 focus:text-white"
            >
              <Link href={"/profile"}>내 프로필</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default Navbar;
