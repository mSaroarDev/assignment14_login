import Link from "next/link";

export default function Appnav() {
  return (
    <>
      <div className="navbar w-full shadow fixed z-50 top-0">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            NextAuth
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
