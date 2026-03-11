import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }


  const {
    name,
    email,
    message,
    companyName,
    Deployment,
    Primary_Cloud_Provider,
    use_case,
    GPU_Availability,
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
      to: "qone@quantrail-data.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
<div style="background: radial-gradient(circle at top left, #1a1a2e, #0a0a0a); color: #e0e0e0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 24px; max-width: 600px; margin: 20px auto; box-shadow: 0 20px 50px rgba(0,0,0,0.7);">
  
  <!-- Header Section -->
  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px;">
    <div>
      <h2 style="color: #ffffff; margin: 0; font-weight: 700; letter-spacing: -0.5px; font-size: 24px;">New Submission</h2>
      <p style="color: #9d7aff; font-size: 13px; margin: 4px 0 0 0; text-transform: uppercase; font-weight: 800; letter-spacing: 1px;">Qone Landing Page</p>
    </div>
  </div>

  <!-- Contact Details Grid -->
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
    <div style="grid-column: span 1;">
      <label style="color: #666; font-size: 11px; text-transform: uppercase; display: block; margin-bottom: 6px; font-weight: 700; letter-spacing: 0.5px;">Full Name</label>
      <span style="font-size: 15px; color: #ffffff; font-weight: 500;">${name}</span>
    </div>
    <div style="grid-column: span 1;">
      <label style="color: #666; font-size: 11px; text-transform: uppercase; display: block; margin-bottom: 6px; font-weight: 700; letter-spacing: 0.5px;">Company</label>
      <span style="font-size: 15px; color: #ffffff; font-weight: 500;">${companyName}</span>
    </div>
    <div style="grid-column: span 2;">
      <label style="color: #666; font-size: 11px; text-transform: uppercase; display: block; margin-bottom: 6px; font-weight: 700; letter-spacing: 0.5px;">Email Address</label>
      <a href="mailto:${email}" style="font-size: 15px; color: #00e5ff; text-decoration: none; border-bottom: 1px solid rgba(0, 229, 255, 0.2);">${email}</a>
    </div>
  </div>

  <!-- Infrastructure Tags -->
  <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 30px;">
    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 8px 14px; border-radius: 100px; font-size: 12px;">
      <span style="color: #00e676; margin-right: 6px;">●</span> <span style="color: #aaa;">Deployment:</span> <strong style="color: #eee;">${Deployment}</strong>
    </div>
    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 8px 14px; border-radius: 100px; font-size: 12px;">
      <span style="color: #00e676; margin-right: 6px;">●</span> <span style="color: #aaa;">Cloud:</span> <strong style="color: #eee;">${Primary_Cloud_Provider}</strong>
    </div>
    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 8px 14px; border-radius: 100px; font-size: 12px;">
      <span style="color: #00e676; margin-right: 6px;">●</span> <span style="color: #aaa;">GPU:</span> <strong style="color: #eee;">${GPU_Availability}</strong>
    </div>
  </div>

  <!-- Content Boxes -->
  <div style="display: flex; flex-direction: column; gap: 15px;">
    <div>
      <label style="color: #7c4dff; font-size: 11px; text-transform: uppercase; font-weight: 800; display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        Message
      </label>
      <div style="background: rgba(0,0,0,0.2); padding: 16px; border-radius: 14px; color: #bbb; line-height: 1.6; border: 1px solid rgba(255,255,255,0.05); font-size: 14px;">
        ${message}
      </div>
    </div>

    <div>
      <label style="color: #7c4dff; font-size: 11px; text-transform: uppercase; font-weight: 800; display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        Use Case
      </label>
      <div style="background: rgba(0,0,0,0.2); padding: 16px; border-radius: 14px; color: #bbb; line-height: 1.6; border: 1px solid rgba(255,255,255,0.05); font-size: 14px;">
        ${use_case}
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
    <p style="font-size: 11px; color: #555; letter-spacing: 1px;">
      SECURED NOTIFICATION // <strong style="color: #777;">QONE INFRASTRUCTURE</strong>
    </p>
  </div>
</div>

  `,
    });
    await transporter.sendMail({
      from: "qone@quantrail-data.com",
      to: email,
      subject: `Message from Quantrail Data`,
      html: `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Contact Form Confirmation</title>
<style>
  body {
    background-color: #f4f4f4;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
  }
  .container {
    max-width: 600px;
    margin: 40px auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,.1);
    overflow: hidden;
  }
  .header {
    background: #5D3FD3;
    color: #fff;
    padding: 20px;
    text-align: center;
  }
  .header h2 {
    margin: 0;
    font-size: 1.8rem;
  }
  .content {
    padding: 20px;
    line-height: 1.6;
  }
  .content p {
    margin: 12px 0;
  }
  .content strong {
    color: #5D3FD3;
  }
  .message-box {
    background: #111;
    color: #ccc;
    padding: 15px;
    border-radius: 6px;
    margin: 20px 0;
    font-family: 'Courier New', monospace;
    white-space: pre-wrap;
  }
  .footer {
    font-size: 0.85rem;
    color: #888;
    text-align: center;
    padding: 15px;
    border-top: 1px solid #eee;
  }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h2>Contact Form Submission</h2>
  </div>
  <div class="content">
    <p><strong>Subject:</strong> Application Received.</p>
    <div class="message-box">
We’ve successfully received your application!qone@quantrail-data.comis excited to review your profile and will get back to you soon.
    </div>
  </div>
  <div class="footer">
    This message was sent via your Qone Landing page contact form.
  </div>
</div>
</body>
</html>
  `,
    });

    return res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
