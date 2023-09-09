"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Appnav from "@/components/Appnav";
import Link from "next/link";
// import Cookies from "js-cookie";

export default function Page() {
  const router = useRouter();
  // function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (formData.email === "") {
      alert("Email Required");
    } else if (formData.password === "") {
      alert("Password Required");
    } else if (formData.username === "") {
      alert("Username required");
    } else if (formData.password !== formData.cpassword) {
      alert("Password and Confirm password does not match");
    } else {
      const config = { method: "POST", body: JSON.stringify(formData) };
      const response = await fetch("/api/register", config);
      const json = await response.json();
      console.log(json["msg"]);
      console.log(json);

      if (json["status"] === true) {
        router.replace(`/emailvarify?email=${formData.email}`);
      } else {
        console.log(json["msg"]);
      }
    }
  };

  return (
    <>
      <Appnav />
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-[500px] bg-gray-100 shadow-md rounded p-6 ">
          <h1 className=" text-center text-xl font-bold mb-5">
            Register to Get Started
          </h1>
          <div className="register-form text-center">
            <form>
              <input
                onChange={handleInputChange}
                name="username"
                value={formData.username}
                type="text"
                placeholder="Enter Username"
                className="input input-bordered w-full max-w-xs my-2"
              />
              <input
                onChange={handleInputChange}
                name="email"
                value={formData.email}
                type="text"
                placeholder="Enter email"
                className="input input-bordered w-full max-w-xs my-2"
              />
              <input
                onChange={handleInputChange}
                name="password"
                value={formData.password}
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full max-w-xs my-2"
              />
              <input
                onChange={handleInputChange}
                name="cpassword"
                value={formData.cpassword}
                type="password"
                placeholder="Retype password"
                className="input input-bordered w-full max-w-xs my-2"
              />
              <button
                type="submit"
                onClick={handleRegistration}
                className="btn btn-wide bg-purple-500 my-2 text-white hover:text-purple-600"
              >
                Register
              </button>
            </form>
          </div>
          <div className="text-center mt-2">
            <Link href="/login">Already a member? Login now.</Link>
          </div>
        </div>
      </div>
    </>
  );
}
