import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bycrptjs from "bcryptjs";

import jwt from "jsonwebtoken";

// mongoDB Call
connect();

export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json();
    const { email, password, } = reqbody;
    //validation
    console.log(reqbody);
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "User Does not  exists" },
        { status: 400 }
      );
    }
    console.log("user Exists");

  

    const validpassword = await bycrptjs.compare(password, user.password);

    if (!validpassword) {
      return NextResponse.json(
        { message: "Invalid Email & Password" },
        { status: 400 }
      );
    }


    const tokenpayload = {
        id: user._id,
        email: user.email,
        username: user.username,
      };
      const token = await jwt.sign(tokenpayload, process.env.TOKEN_SECRET!, {
        expiresIn: "7d",
      });
       

     

        const response = NextResponse.json({
            message: "User Logged in successfully ",
            success: true,
            data: user,
        
        }); 
        response.cookies.set("token", token, {
            httpOnly: true,
        
          });
          return response;

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
