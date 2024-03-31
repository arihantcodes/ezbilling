import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bycrptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
// mongoDB Call
connect();

export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json();
    const { fullname, username, email, password } = reqbody;
    //validation
    console.log(reqbody);
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    const salt = await bycrptjs.genSalt(10);
    const haspassword = await bycrptjs.hash(password, salt);

    const newUser = new User({
      fullname,
      username,
      email,
      password: haspassword,
    });

    const saveUser = await newUser.save();
    console.log(saveUser);

    //send email for verify

    await sendEmail({ email, emailType: "verify", userId: saveUser._id });

    return NextResponse.json({
      message: "User Registered successfully ",
      success: true,
      saveUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
