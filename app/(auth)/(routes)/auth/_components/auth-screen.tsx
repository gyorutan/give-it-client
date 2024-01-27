"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AuthScreen = () => {
  return (
    <>
      <div className="space-y-1">
        <h1 className="text-4xl md:text-6xl font-black">Give it !</h1>
        <p className="md:text-lg">친구들과 물건을 주고받자 !</p>
      </div>
      <div className="flex flex-col w-full gap-4">
        <Button asChild variant={"blue"}>
          <Link href={"/auth/login"}>로그인</Link>
        </Button>
        <Button asChild>
          <Link href={"/auth/signup"}>회원가입</Link>
        </Button>
      </div>
    </>
  );
};

export default AuthScreen;
