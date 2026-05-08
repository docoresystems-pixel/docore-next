import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("FORM DATA:", body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "docoresystems@gmail.com",
        pass: "jrjtqcabusrbvtgn",
      },
    });

    const info = await transporter.sendMail({
      from: "docoresystems@gmail.com",
      to: "docoresystems@gmail.com",
      subject: "New Website Enquiry",
      text: `
Name: ${body.name}

Email: ${body.email}

Message:
${body.message}
      `,
    });

    console.log("MAIL SENT:", info.response);

    return NextResponse.json({
      success: true,
      message: "Enquiry sent successfully",
    });

  } catch (error) {
    console.log("MAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send enquiry",
      },
      { status: 500 }
    );
  }
}