"use client";
import { useState } from "react";
import Appnav from "@/components/Appnav";
import { useRouter } from "next/navigation";

export default function EmailVarify() {
  const router = useRouter();

  // const [formData, setFormData] = useState({
  //   varifyToken: "",
  // });

  const handleBtn = async () => {
    try {
      const res = await fetch("/api/email");
      if (res.ok) {
        router.replace("/dashboard");
      } else {
        console.error("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <Appnav />
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-[500px] bg-gray-100 shadow-md rounded p-6 ">
          <h1 className=" text-center text-xl font-bold mb-5">
            Your are Registered
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
