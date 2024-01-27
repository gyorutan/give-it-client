"use client";

import { api } from "@/helper/api";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface User {
  name?: string;
  username?: string;
  image: string;
  studentId: string;
  email: string;
}

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUserProfile = async () => {
      const data = await axios
        .get(`${api}/users/${userId}`, {
          withCredentials: true,
        })
        .then((res) => res.data);
      setUser(data.user);
    };
    getUserProfile();
  }, [userId]);

  return (
    <>
      <div className="border space-y-4 cursor-pointer border-zinc-700 p-4 rounded-xl hover:bg-zinc-800 transition">
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
    </>
  );
};

export default UserProfile;
