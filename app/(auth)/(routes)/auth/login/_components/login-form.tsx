"use client";

import { Button } from "@/components/ui/button";
import useAuth from "@/store/useAuth";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    studentId: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const auth = useAuth();

  const resetFormData = () => {
    setFormData({
      ...formData,
      studentId: "",
      password: "",
    });
  };

  const handleLogin = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await axios
        .post("/api/auth/login", formData)
        .then((res) => res.data);
      console.log(data);
      if (data.success) {
        auth.login();
        auth.setName(data.user.name);
        toast.success(data.message);
        router.push("/auth/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("알 수 없는 오류");
    } finally {
      resetFormData();
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleLogin}>
      <div className="relative">
        <label className="absolute left-3 top-2 font-bold text-sm">학번</label>
        <input
          value={formData.studentId}
          onChange={(e) => {
            setFormData({ ...formData, studentId: e.target.value });
          }}
          required
          autoComplete="false"
          type="text"
          className="
              bg-inherit 
              w-full 
              pt-9 
              pb-2 
              px-3 
              text-lg 
              font-bold 
              border 
              focus:ring-2
              focus:ring-blue-500
              border-zinc-700 
              outline-none 
              rounded-md 
              transition"
        />
      </div>
      <div className="relative">
        <label className="absolute left-3 top-2 font-bold text-sm">
          비밀번호
        </label>
        <input
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          required
          autoComplete="false"
          type="password"
          className="
              tracking-[4px]
              bg-inherit 
              w-full 
              pt-9 
              pb-2 
              px-3 
              text-lg 
              font-bold 
              border 
              focus:ring-2
              focus:ring-blue-500
              border-zinc-700 
              outline-none 
              rounded-md 
              transition"
        />
      </div>
      {loading ? (
        <Button disabled type="submit" variant={"blue"} className="w-full">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        </Button>
      ) : (
        <Button type="submit" variant={"blue"} className="w-full">
          로그인
        </Button>
      )}
    </form>
  );
};

export default LoginForm;
