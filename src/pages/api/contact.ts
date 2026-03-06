import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log(req.body);

  const {
    name,
    email,
    message,
    companyName,
    infraType,
    GPU_enabled,
    zeroData_accepted,
  } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // office mail
        pass: process.env.MAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: email,
      to: "contact@quantrail-data.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
    <div style="background-color:#000000; color:#ffffff; font-family:Arial, sans-serif; padding:20px; border-radius:8px;">
      <h2 style="color:#5D3FD3; margin-bottom:10px;"> New Contact Form Submission</h2>
      <p style="margin:8px 0;"><strong style="color:#5D3FD3;">Name:</strong> ${name}</p>
      <p style="margin:8px 0;"><strong style="color:#5D3FD3;">Email:</strong> ${email}</p>
      <p style="margin:8px 0;"><strong style="color:#5D3FD3;">Company Name:</strong> ${companyName}</p>
      <p style="margin:8px 0;"><strong style="color:#5D3FD3;">Infrastructure Type:</strong> ${infraType}</p>
      <p style="margin:8px 0;"><strong style="color:#5D3FD3;">Accept the followings:</strong></p>
      <p style="margin:8px 30px;"> ${GPU_enabled} </p>
      <p style="margin:8px 30px;"> ${zeroData_accepted} </p>
      <p style="margin:8px 0;"><strong style="color:#5D3FD3;">Message:</strong></p>
      <div style="background-color:#111111; padding:12px; border-radius:6px; color:#cccccc;">
        ${message}
      </div>
      <hr style="border:1px solid #5D3FD3; margin:20px 0;" />
      <p style="font-size:12px; color:#888888;">This message was sent via your Qone Landing page contact form.</p>
    </div>
  `,
    });
    await transporter.sendMail({
      from: "contact@quantrail-data.com",
      to: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
    <div style="background-color:#000000; color:#ffffff; font-family:Arial, sans-serif; padding:20px; border-radius:8px;">
      <h2 style="color:#5D3FD3; margin-bottom:10px;"> New Contact Form Submission</h2>
      <p style="margin:8px 0;"><strong style="color:#5D3FD3;">Message:</strong>Application Received.</p>
      <p style="margin:8px 0;"><strong style="color:#5D3FD3;">Message:</strong></p>
      <div style="background-color:#111111; padding:12px; border-radius:6px; color:#cccccc;">


Your infrastructure profile has been submitted for technical review. Our engineering team will verify your hardware specs against our deployment requirements. Once your environment is cleared for the pilot, we will contact you to schedule a briefing and initiate the environment audit.
      </div>
      <hr style="border:1px solid #5D3FD3; margin:20px 0;" />
      <p style="font-size:12px; color:#888888;">This message was sent via your Qone Landing page contact form.</p>
    </div>
  `,
    });

    return res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
