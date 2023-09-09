import { TokenCookie } from "@/app/utils/RegisterCookie";
import { NextResponse } from "next/server";
import { nodemailer } from "nodemailer";

export async function POST(req) {
  const JSON = await req.json();

  let username = JSON["username"];
  let email = JSON["email"];
  let password = JSON["password"];
  let cpassword = JSON["cpassword"];

  // user push to database / cookie
  try {
    if (password !== cpassword) {
      alert("Password and Confirm password does not match!");
    } else {
      let cookie = await TokenCookie(email, username, password);
      return NextResponse.json(
        { status: true, data: cookie },
        { status: 200, headers: cookie }
      );
    }
  } catch (error) {
    console.log(error);
  }
}
