"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LogInPage() {
  const [user, setUser] = useState({ email: "", password: "" });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  async function onLogIn() {
    try {
      setLoading(true);
      console.log("user", user);
      console.log("trying to log in");
      const response = await axios.post("/api/users/login", user);
      console.log("response", response);
      toast.success("User logged in successfully");
    } catch (error: any) {
      console.log("logIn failed");
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-5 items-center pt-10">
      <h1>Log In</h1>
      <p>Log in to your account</p>
      <form
        className="flex flex-col gap-2 "
        onSubmit={(e) => {
          e.preventDefault();
          onLogIn();
        }}
      >
        <label className="grid gap-1">
          Email:
          <input
            type="email"
            name="email"
            className="text-black px-1"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </label>
        <label className="grid gap-1">
          Password:
          <input
            type="password"
            name="password"
            className="text-black px-1"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </label>
        <button
          className="bg-white mt-5 border border-white/70 rounded-xl text-black"
          type="submit"
          disabled={loading}
        >
          Log In
        </button>
      </form>
      <Link href="/signup">signup</Link>
    </div>
  );
}
