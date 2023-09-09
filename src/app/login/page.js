"use client";
import { useState } from "react";
import Appnav from "@/components/Appnav";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === "") {
      alert("Email Required");
    } else if (formData.password === "") {
      alert("Password Required");
    } else {
      const config = { method: "POST", body: JSON.stringify(formData) };
      const response = await fetch("/api/login", config);
      const json = await response.json();
      console.log(json["msg"]);
      if (json["status"] === true) {
        router.replace("/dashboard");
        window.location.reload();
      } else {
        alert(json["msg"]);
      }
    }
  };

  return (
    <>
      <Appnav />
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-[500px] bg-gray-100 shadow-md rounded p-6">
          <h1 className="text-center text-xl font-bold mb-5">Login to Enter</h1>
          <div className="login-form text-center">
            <form>
              <input
                onChange={handleChange}
                value={formData.email}
                name="email" // Added name attribute
                type="text"
                placeholder="Enter email"
                className="input input-bordered w-full max-w-xs my-2"
              />
              <input
                onChange={handleChange}
                value={formData.password}
                name="password" // Added name attribute
                type="password" // Changed type to "password" for password input
                placeholder="Enter password"
                className="input input-bordered w-full max-w-xs my-2"
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-wide bg-purple-500 my-2 text-white hover:text-purple-600"
              >
                Login
              </button>
            </form>

            {/* <button
              onClick={() => {
                signIn("github");
              }}
              className="btn btn-wide btn-neutral my-2 text-white hover:text-purple-600"
            >
              Login with GitHub
            </button> */}
          </div>
          <div className="text-center mt-2">
            <Link href="/register">Not Registered yet? Register here.</Link>
          </div>
        </div>
      </div>
    </>
  );
}
