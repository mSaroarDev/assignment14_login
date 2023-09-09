import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

// encrypt jwt token (SignJWT)
export async function CreateToken(email, username, password) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new SignJWT({
    email: email,
    username: username,
    password: password,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION)
    .sign(secret);
  return token;
}

// decrypt jwt token (jwtVerify)
export async function VerifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const decodedToken = await jwtVerify(token, secret);
  const payload = decodedToken["payload"];

  return payload;
}

// token cookie for storing cookie
export async function TokenCookie(email, username, password) {
  let token = await CreateToken(email, username, password);
  return {
    "Set-Cookie": `token=${token}; Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict`,
  };
}
