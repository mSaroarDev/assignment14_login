import LogoutButton from "./LogoutButton";
import Link from "next/link";

export default function AppnavLogged() {
  return (
    <>
      <div className="navbar bg-base-100 shadow fixed top-0 z-50 w-full">
        <div className="navbar-start">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl font-bold"
          >
            NextAuth
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <LogoutButton />
        </div>
      </div>
    </>
  );
}
