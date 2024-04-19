"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import User from "@/modules/userModel";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (user.name && user.email && user.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  async function onSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setLoading(true);
      console.log("user", user);
      console.log("trying to sign up");

      const response = await axios.post("/api/users/signup", user);
      console.log("response", response);
      // router.push("/login");
    } catch (error: any) {
      console.log("signUp failed");
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-5 items-center">
      <h1>Sigh In</h1>
      <p>{loading ? "Loading..." : "Create an account"}</p>
      <form className="flex flex-col gap-2" onSubmit={onSignUp}>
        <label className="grid gap-1">
          Username:
          <input
            type="text"
            name="username"
            className="text-black"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </label>
        <label className="grid gap-1">
          Email:
          <input
            type="email"
            name="email"
            className="text-black"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </label>
        <label className="grid gap-1">
          Password:
          <input
            type="password"
            name="password"
            className="text-black"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </label>
        <button
          className={` mt-5 border-white/70 rounded-xl text-black ${
            buttonDisabled ? "bg-gray-300" : "bg-blue-500"
          }`}
          type="submit"
          disabled={loading}
        >
          Log In
        </button>
      </form>
      <Link href="/login">Log In</Link>
    </div>
  );
}
