import Bill from "@/models/bill.model";
import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";

// MongoDB Connection
connect();


export async function GET(request: NextRequest) {
    const userId = request.cookies.get("userId")?.value;
    const bill = await Bill.findOne({ _id: userId })
  
    return NextResponse.json({
      message: "User Found",
  
      data: bill,
    });
  }
  