"use client";
import { useRouter } from "next/navigation";
import Appnav from "@/components/Appnav";
import { useState, useEffect } from "react";

export default function EmailVarify() {
  const router = useRouter();

  const handleBtn = async () => {
    try {
      if (router.query && "email" in router.query) {
        const email = router.query.email;

        const res = await fetch(`/api/email`);
        if (res.ok) {
          router.replace("/dashboard");
        } else {
          console.log(email);
        }
      } else {
        console.log(email);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    if (router.query && "email" in router.query) {
      const email = router.query.email;
      setFormData({ varifyToken: email });
    }
  }, [router.query]);

  return (
    <>
      <Appnav />
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-[500px] bg-gray-100 shadow-md rounded p-6 ">
          <h1 className=" text-center text-xl font-bold mb-5">
            You are Registered
          </h1>
          <div className="login-form text-center">
            <button
              onClick={handleBtn}
              className="btn btn-wide bg-purple-500 my-2 text-white hover:text-purple-600"
            >
              Thanks
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
