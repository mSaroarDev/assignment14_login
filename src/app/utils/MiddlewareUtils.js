import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTHelper";
import { useRouter } from "next/navigation";

export async function CheckCookieAuth(req) {
  try {
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("email", payload["email"]);

    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export async function LoginPageProtect(req) {
  const token = req.cookies.get("token");
  if (token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
}
