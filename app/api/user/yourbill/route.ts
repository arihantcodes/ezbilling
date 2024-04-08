import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import Bill from "@/models/bill.model";
import { connect } from "@/dbconfig/dbconfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const tokenCookie = request.cookies.get("token");

    if (!tokenCookie) {
      return NextResponse.json(
        {
          message: "Token cookie not found",
        },
        { status: 400 }
      );
    }

    const token: string = tokenCookie.value;

    let decodedToken: JwtPayload | null = null;

    try {
      decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;
    } catch (error) {
      console.error("Error decoding token:", error);
      return NextResponse.json(
        {
          message: "Failed to decode token",
          data: null,
        },
        { status: 400 }
      );
    }

    if (!decodedToken || !decodedToken.id) {
      return NextResponse.json(
        {
          message: "User ID not found in token",
          data: null,
        },
        { status: 400 }
      );
    }

    const userId: string = decodedToken.id;

    const bill = await Bill.findOne({ userId });

    if (!bill) {
      return NextResponse.json(
        {
          message: "Bill not found for the user",
          data: null,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Bill Found",
      data: bill,
    });
  } catch (error) {
    console.error("Error retrieving bill:", error);
    return NextResponse.json(
      {
        message: "Internal server error in Backend",
        data: null,
      },
      { status: 500 }
    );
  }
}
