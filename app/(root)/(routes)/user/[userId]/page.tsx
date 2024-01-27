import React from "react";
import UserProfile from "./_components/user-profile";
import { useParams } from "next/navigation";

const UserProfilePage = () => {
  return (
    <div className="h-full px-4 space-y-4">
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;
