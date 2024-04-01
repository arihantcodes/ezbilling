import { connect } from "@/dbconfig/dbconfig";

import { NextRequest, NextResponse } from "next/server";

// mongoDB Call
connect();

export async function GET(request: NextRequest) {
  try {
    const response = NextResponse.json({
      message: "User Logged out successfully ",
      success: true,
    });
    console.log("User Logged out successfully ")
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
