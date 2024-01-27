import Link from "next/link";
import React from "react";
import LoginForm from "./_components/login-form";

const LoginPage = () => {
  return (
    <div className="md:w-[500px]">
      <div className="space-y-6">
        <p className="text-2xl font-bold md:text-3xl">로그인</p>
        <LoginForm />
        <div className="text-center space-x-4">
          <Link
            href={"/"}
            className="text-sm text-white/70 hover:text-white transition"
          >
            돌아가기
          </Link>
          <span className="text-zinc-700">|</span>
          <Link
            href={"/auth/findpassword"}
            className="text-sm text-white/70 hover:text-white transition"
          >
            비밀번호 찾기
          </Link>
          <span className="text-zinc-700">|</span>
          <Link
            href={"/auth/signup"}
            className="text-sm text-white/70 hover:text-white transition"
          >
            계정 만들기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
