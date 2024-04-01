"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const verifyemail = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyuseremail = async () => {
    try {
      await axios.post("/api/user/verifyemail", { token });
      setVerified(true);
      setError(false);
    } catch (error: any) {
      setError(error.response.data);
    }
  };
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);
  useEffect(() => {
    setError(false)
    if (token.length > 0) {
      verifyuseremail();
    }
  }, [token]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
      <h1 className="text-3xl font-bold">Verify Email</h1>
      
      {verified && (
        <div>
          <h2 className="text-green-500">Email verified successfully</h2>
          <Link href="/login">
            {" "}
            <Button variant="outline" className="w-full">
              Login
            </Button>
          </Link>
        </div>
      )}
      {error && (
        <div>
          <h2 className="text-red-500 mt-4">Something Went Wrong</h2>
          
        </div>
      )}
    </div>
  );
};

export default verifyemail;
