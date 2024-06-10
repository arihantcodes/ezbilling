import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";


// mongoDB Call
connect();

export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json();
    const { token } = reqbody;
    console.log(token);

    const user = await User.findOne({
      verifytoken: token,
      verifytokenexpires: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid Token" }, { status: 400 });
    }
    console.log(user);
    user.isverified = true;
    user.verifytokenexpires = undefined;
    user.verifytoken = undefined;

    await user.save(); // database dusre contenent mai hai toh await karna padega

    return NextResponse.json(
      { message: "Email Verified", sucess: true },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
