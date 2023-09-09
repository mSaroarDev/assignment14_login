import Appnav from "@/components/Appnav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Appnav />
      <div className="buttons h-screen w-full flex items-center justify-center">
        <div>
          <div className="btn-group">
            <button className="btn btn-active">
              <Link href="/login">Login</Link>
            </button>
            <button className="btn">
              <Link href="/register">Register</Link>
            </button>
            <button className="btn">
              <Link href="/dashboard">Dashboard</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
