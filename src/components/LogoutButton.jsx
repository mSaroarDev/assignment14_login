"use client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("api/login");
    const json = await res.json();

    console.log(json);

    if (json.msg === "Logout Sucess") {
      router.push("/login");
      window.location.reload();
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          handleLogout();
        }}
        className="btn btn-neutral"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
