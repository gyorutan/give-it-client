"use client";

import { Button } from "@/components/ui/button";
import { useDebounce } from "@/hooks/useDebounce";
import { api } from "@/helper/api";
import { passwordRegex, studentIdRegex, usernameRegex } from "@/helper/regex";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const SignupForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    studentId: "",
    password: "",
  });
  const [validation, setValidation] = useState({
    username: "normal",
    studentId: "normal",
    password: "normal",
  });
  const [loading, setLoading] = useState(false);

  const resetFormData = () => {
    setFormData({
      ...formData,
      name: "",
      username: "",
      studentId: "",
      password: "",
    });
    setValidation({
      ...validation,
      username: "normal",
      studentId: "normal",
      password: "normal",
    });
  };

  const validateFormData = async (name: string, value: string) => {
    if (name === "username" && !value) {
      setValidation({ ...validation, username: "normal" });
      return;
    } else if (name === "username" && value) {
      const regexResult = usernameRegex.test(value);
      if (regexResult) {
        const data = await axios
          .get(`${api}/auth/${name}/${value}`)
          .then((res) => res.data);
        if (data.message === "error") {
          alert("서버오류");
          return;
        }
        setValidation({ ...validation, username: data.message });
      } else {
        setValidation({ ...validation, username: "regex" });
        return;
      }
    }

    if (name === "studentId" && !value) {
      setValidation({ ...validation, studentId: "normal" });
      return;
    } else if (name === "studentId" && value) {
      const regexResult = studentIdRegex.test(value);
      if (regexResult) {
        const data = await axios
          .get(`${api}/auth/${name}/${value}`)
          .then((res) => res.data);
        if (data.message === "error") {
          alert("서버오류");
          return;
        }
        setValidation({ ...validation, studentId: data.message });
      } else {
        setValidation({ ...validation, studentId: "regex" });
        return;
      }
    }

    if (name === "password" && !value) {
      setValidation({ ...validation, password: "normal" });
      return;
    } else if (name === "password" && value) {
      const regexResult = passwordRegex.test(value);
      if (regexResult) {
        setValidation({ ...validation, password: "valid-password" });
      } else {
        setValidation({ ...validation, password: "regex" });
        return;
      }
    }
  };

  const onChangeDebounced = useDebounce(validateFormData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...formData, [name]: value });
    onChangeDebounced(name, value);
  };

  const handleSignup = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      validation.username !== "valid-username" ||
      validation.studentId !== "valid-studentId" ||
      validation.password !== "valid-password"
    ) {
      toast.error("올바른 정보가 아닙니다");
      return;
    }
    try {
      setLoading(true);
      const data = await axios
        .post(`${api}/auth/signup`, formData)
        .then((res) => res.data);
      if (data.success) {
        router.push("/auth/login");
        toast.success(data.message);
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
    <form className="space-y-4" onSubmit={handleSignup}>
      <div className="relative">
        <label className="absolute left-3 top-2 font-bold text-sm">이름</label>
        <input
          value={formData.name}
          onChange={handleInputChange}
          name="name"
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
          닉네임
        </label>
        {validation.username === "invalid-username" ? (
          <span className="absolute right-2 top-1 font-medium text-sm text-red-500">
            이미 사용중인 닉네임입니다
          </span>
        ) : null}
        {validation.username === "valid-username" ? (
          <span className="absolute right-2 top-1 text-sm text-blue-500">
            사용 가능한 닉네임입니다
          </span>
        ) : null}
        {validation.username === "regex" ? (
          <span className="absolute right-2 top-1 text-sm text-red-500">
            영문・일어・숫자 / 3 ~ 10자
          </span>
        ) : null}
        <input
          value={formData.username}
          onChange={handleInputChange}
          name="username"
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
        <label className="absolute left-3 top-2 font-bold text-sm">학번</label>
        {validation.studentId === "invalid-studentId" ? (
          <span className="absolute right-2 top-1 font-medium text-sm text-red-500">
            이미 사용중인 학번입니다
          </span>
        ) : null}
        {validation.studentId === "valid-studentId" ? (
          <span className="absolute right-2 top-1 text-sm text-blue-500">
            사용 가능한 학번입니다
          </span>
        ) : null}
        {validation.studentId === "regex" ? (
          <span className="absolute right-2 top-1 text-sm text-red-500">
            학번 형식이 올바르지 않습니다
          </span>
        ) : null}
        <input
          value={formData.studentId}
          onChange={handleInputChange}
          name="studentId"
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
        {validation.password === "valid-password" ? (
          <span className="absolute right-2 top-1 text-sm text-blue-500">
            사용 가능한 학번입니다
          </span>
        ) : null}
        {validation.password === "regex" ? (
          <span className="absolute right-2 top-1 text-sm text-red-500">
            영문・숫자 / 6 ~ 20자
          </span>
        ) : null}
        <input
          value={formData.password}
          onChange={handleInputChange}
          name="password"
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
          회원가입
        </Button>
      )}
    </form>
  );
};

export default SignupForm;
