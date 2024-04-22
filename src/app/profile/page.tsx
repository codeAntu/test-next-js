"use client";

import axios from "axios";
import { set } from "mongoose";
import { useRouter } from "next/navigation";
import { useEffect, useReducer, useState } from "react";

export default function ProfilePage() {
  const router = useRouter();

  const user = async () => {
    try {
      const response = await axios.get("/api/users/me");
      console.log("response", response);
      router.push(`/profile/${response.data.name}`);
    } catch (e) {
      console.error("Logout failed");
    }
  };

  useEffect(() => {
    user();
  }, []);

  return (
    <div className="flex flex-col gap-5 items-center pt-10">
      <h1>Profile</h1>
      <p>View your profile</p>
    </div>
  );
}
