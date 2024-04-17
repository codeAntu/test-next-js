"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  async function OnSignUp() {}

  return (
    <div className="flex flex-col gap-5 items-center">
      <h1>Sigh In</h1>
      <p>Create an account</p>
      <form className="flex flex-col gap-2 ">
        <label className="grid gap-1">
          Username:
          <input
            type="text"
            name="username"
            className="text-black"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
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
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </label>
        <button
          className="bg-white mt-5 border border-white/70 rounded-xl text-black"
          type="submit"
          onClick={OnSignUp}
        >
          Log In
        </button>
      </form>
      <Link href="/login">
        Log In
      </Link>
    </div>
  );
}
