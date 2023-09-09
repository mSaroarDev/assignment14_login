import { CheckCookieAuth, LoginPageProtect } from "./app/utils/MiddlewareUtils";

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return CheckCookieAuth(req);
  } else if (req.nextUrl.pathname.startsWith("/login")) {
    return LoginPageProtect(req);
  } else if (req.nextUrl.pathname.startsWith("/register")) {
    return LoginPageProtect(req);
  }
}
