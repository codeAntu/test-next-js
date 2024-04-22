import nodemailer from "nodemailer";
import User from "@/modules/userModel";
import bcryptjs from "bcryptjs";

export async function sendEmail(to: string, subject: string, userId: string) {
  try {
    const token = await bcryptjs.hash(userId, 12);

    if (subject == "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verificationToken: token,
        verificationTokenExpires: Date.now() + 3600000,
      });
    } else if (subject == "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPassword: token,
        forgotPasswordExpires: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    const message = {
      from: "codeAntu@gmail.com",
      to: to,
      subject:
        subject == "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<a href="http://${
        process.env.DOMAIN
      }/${subject.toLowerCase()}?token=${token}"</a>`,
    };

    const mailResponse = await transport.sendMail(message);
  } catch (error: any) {
    throw new Error(error);
  }
}
