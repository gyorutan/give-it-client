import Link from "next/link";
import React from "react";
import SignupForm from "./_components/signup-form";

const SignupPage = () => {
  return (
    <div className="md:w-[500px]">
      <div className="space-y-6">
        <p className="text-2xl font-bold md:text-3xl">회원가입</p>
        <SignupForm />
        <div className="text-center space-x-4">
          <Link
            href={"/"}
            className="text-sm text-white/70 hover:text-white transition"
          >
            돌아가기
          </Link>
          <span className="text-zinc-700">|</span>
          <Link
            href={"/auth/login"}
            className="text-sm text-white/70 hover:text-white transition"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
