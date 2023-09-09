import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  // transporter
  let Transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // prepare email
  let myEmail = {
    from: "Email Verification <info@teamrabbil.com>",
    to: toEmail,
    subject: "New user Registration verification email",
    text: "Welcome to our website. You are a registered user from now. You can enjoy all of our services from us",
  };

  try {
    await Transporter.sendMail(myEmail);
    return NextResponse.json({
      msg: "Email Sending Successful",
    });
  } catch (error) {
    return NextResponse.json({
      msg: error,
    });
  }
}
