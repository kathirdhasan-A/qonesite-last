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
      to: "qone@quantrail-data.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
<div style="background-color: #0a0a0a; color: #e0e0e0; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px; border: 1px solid #222; border-radius: 16px; max-width: 600px; margin: 20px auto; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
  
  <!-- Header with Gradient Line -->
  <h2 style="color: #ffffff; margin-bottom: 5px; font-weight: 600; letter-spacing: 0.5px;">New Submission</h2>
  <p style="color: #7c4dff; font-size: 14px; margin-top: 0; margin-bottom: 25px; text-transform: uppercase; font-weight: bold;">Qone Landing Page</p>
  
  <div style="background: linear-gradient(90deg, #7c4dff, #3f51b5); height: 2px; width: 60px; margin-bottom: 30px; border-radius: 2px;"></div>

  <!-- Contact Details Grid -->
  <div style="margin-bottom: 25px;">
    <div style="margin-bottom: 15px;">
      <span style="color: #7c4dff; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 4px; font-weight: bold;">Full Name</span>
      <span style="font-size: 16px; color: #ffffff;">${name}</span>
    </div>

    <div style="margin-bottom: 15px;">
      <span style="color: #7c4dff; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 4px; font-weight: bold;">Email Address</span>
      <a href="mailto:${email}" style="font-size: 16px; color: #00bcd4; text-decoration: none;">${email}</a>
    </div>

    <div style="margin-bottom: 15px;">
      <span style="color: #7c4dff; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 4px; font-weight: bold;">Company & Infrastructure</span>
      <span style="font-size: 16px; color: #ffffff;">${companyName} • <span style="color: #bbb;">${infraType}</span></span>
    </div>
  </div>

  <!-- Agreements / Tags -->
  <div style="margin-bottom: 25px; display: flex; gap: 10px; flex-wrap: wrap;">
    <span style="background-color: #1a1a1a; border: 1px solid #333; padding: 6px 12px; border-radius: 20px; font-size: 12px; color: #00e676;">
      ● GPU: ${GPU_enabled}
    </span>
    <span style="background-color: #1a1a1a; border: 1px solid #333; padding: 6px 12px; border-radius: 20px; font-size: 12px; color: #00e676;">
      ● Zero Data: ${zeroData_accepted}
    </span>
  </div>

  <!-- Message Box -->
  <span style="color: #7c4dff; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 8px; font-weight: bold;">Message</span>
  <div style="background-color: #141414; padding: 20px; border-radius: 12px; color: #bbbbbb; line-height: 1.6; border-left: 4px solid #7c4dff;">
    ${message}
  </div>

  <!-- Footer -->
  <hr style="border: 0; border-top: 1px solid #222; margin: 30px 0 20px 0;" />
  <p style="font-size: 11px; color: #666; text-align: center; letter-spacing: 0.5px;">
    System generated notification via <strong>Qone Infrastructure</strong>
  </p>
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
