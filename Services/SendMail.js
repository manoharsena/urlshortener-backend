import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

export const sendMail = async (mailReceiver, message) => {
  try {
    let transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email Content
    const mailContents = {
      from: process.env.EmailId,
      to: mailReceiver,
      subject: "Reset Password For URL Shortener Web-App",
      html: message,
    };

    // Send Mail
    const info = await transport.sendMail(mailContents);
  } catch (error) {
    console.log("Error sending Email:", error);
  }
};
