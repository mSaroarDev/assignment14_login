import { TokenCookie } from "@/app/utils/JWTHelper";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JSON = await req.json();
  let email = JSON["email"];
  let password = JSON["password"];

  // database checking
  if (email === "email@email.com" && password === "123") {
    let cookie = await TokenCookie(email);
    return NextResponse.json(
      { status: true, msg: "Login Success" },
      { status: 200, headers: cookie }
    );
  } else {
    return NextResponse.json({
      status: false,
      msg: error,
    });
  }
}

export async function GET(req, res) {
  cookies().delete("token");
  return NextResponse.json({ msg: "Logout Sucess" }, { status: 200 });
}
