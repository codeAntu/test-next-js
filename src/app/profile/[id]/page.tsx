"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function ProfilePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      router.push("/login");
    } catch (e) {
      console.error("Logout failed");
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center pt-10">
      <h1>
        Profile
        <span className=" bg-red-600 rounded-md ml-2 p-1">{params.id}</span>
      </h1>
      <p>View your profile</p>
      <div>
        <button
          className="bg-red-600 text-white p-2 rounded-md"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
