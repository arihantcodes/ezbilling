import User from "@/models/user.model";
import nodemailer from "nodemailer";
import bycryptjs from "bcryptjs";
export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashtoken = await bycryptjs.hash(userId.toString(), 10);
    if (emailType === "verify") {
      const updateUser = await User.findByIdAndUpdate(userId, {
        $set: {
          verifytoken: hashtoken,
          verifytokenexpires: Date.now() + 3600000,
        },
      });
    } else if (emailType === "reset") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPasswordToken: hashtoken,
          forgotpasswordtokenexpires: Date.now() + 3600000,
        },
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ddb8503a794d86",
        pass: "ab707c3189ad92",
      },
    });

    const mailoption = {
      from: "jainari1208@gmail.com",
      to: email,
      subject:
        emailType === "verify" ? "Verify your email" : "Reset your password",

      html: ` <p>
      Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashtoken}">
          here
      </a>
      to ${
        emailType === "verify" ? "Verify your email" : "Reset your password"
      }or copy and paste the link below in your browser.<br> ${
        process.env.DOMAIN
      }/verifyemail?token=${hashtoken}
  </p>`,
    };

    const mailresponse = await transport.sendMail(mailoption);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
