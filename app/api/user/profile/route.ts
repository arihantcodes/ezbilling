import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

import { getDataFromToken } from "@/helpers/getdatafromtoken";
// mongoDB Call
connect();

export async function POST(request: NextRequest) {
  const userId = await getDataFromToken(request);
  const user = await User.findOne({ _id: userId }).select("-password");

  return NextResponse.json({
    message: "User Found",

    data: user,
  });
}
