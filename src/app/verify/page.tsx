"use client";

import axios from "axios";
import { use, useEffect, useState } from "react";
import Link from "next/link";

export default function verifyEmailPage() {
  const [token, setToken] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const verifyEmail = async () => {
    try {
      const response = await axios.post("/api/users/verifyEmail", { token });
      setSuccess(true);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken);
  }, []);

  useEffect(() => {
    if (token) {
      verifyEmail();
    }
  }, [token]);

  return (
    <div className="text-center p-10">
      <div className="bg-green-500 p-4 m-6">{token}</div>
      <div>
        {error && <div className="text-red-800 ">{error}</div>}
        {success && (
          <div>
            <div>Your email has been verified successfully!</div>
            <Link href="/profile" className="bg-red-600 p-8">
              Go to profile
            </Link>
          </div>
        )}
      </div>
      <div>
        <div>Verifying email...</div>
      </div>
    </div>
  );
}
