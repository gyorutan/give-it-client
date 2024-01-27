"use client";

import { api } from "@/helper/api";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import MyStuffList from "./my-stuff-list";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useAuth from "@/store/useAuth";
import toast from "react-hot-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface User {
  _id: string;
  name?: string;
  username?: string;
  image?: string;
  studentId?: string;
  email?: string;
}

const MyProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const clearStorage = () => {
    useAuth.persist.clearStorage();
  };

  const logout = async () => {
    await axios.get(`${api}/auth/logout`, {
      withCredentials: true,
    });
    clearStorage();
    router.push("/auth");
    toast.success("로그아웃되었습니다");
  };

  useEffect(() => {
    const getUserProfile = async () => {
      const data = await axios
        .get(`${api}/users/profile`, {
          withCredentials: true,
        })
        .then((res) => res.data);
      setUser(data.user);
    };
    getUserProfile();
  }, []);

  return (
    <>
      <p className="text-lg font-bold ml-1">내 정보</p>
      <div className="border space-y-4 border-zinc-700 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {user?.image ? (
              <Image
                className="rounded-full"
                src={user?.image!}
                alt="user-profile-image"
                height={50}
                width={50}
                priority
              />
            ) : null}
            <div className="flex flex-col">
              <span className="text-lg font-bold">{user?.name}</span>
              <span className="text-sm">@{user?.username}</span>
            </div>
          </div>
          <Button onClick={logout} variant={"destructive"}>
            로그아웃
          </Button>
        </div>
        <div className="font-semibold flex flex-col gap-2">
          <div className="space-x-2">
            <span>학번</span>
            <span className="text-zinc-700">|</span>
            <span>{user?.studentId}</span>
          </div>
          <div className="space-x-2">
            <span>이메일</span>
            <span className="text-zinc-700">|</span>
            <span>{user?.email}</span>
          </div>
        </div>
      </div>
      <Tabs defaultValue="my-stuff" className="w-full">
        <TabsList className="bg-zinc-800 text-white space-x-1 w-full mb-2">
          <TabsTrigger value="my-stuff" className="w-full">
            내 물건
          </TabsTrigger>
          <TabsTrigger value="transaction" className="w-full">
            거래중
          </TabsTrigger>
          <TabsTrigger value="heart" className="w-full">
            좋아요
          </TabsTrigger>
        </TabsList>
        <TabsContent value="my-stuff">{/* <MyStuffList /> */}</TabsContent>
        <TabsContent value="transaction">거래중인 물건이 없어요</TabsContent>
        <TabsContent value="heart">좋아요 누른 물건</TabsContent>
      </Tabs>
    </>
  );
};

export default MyProfile;
