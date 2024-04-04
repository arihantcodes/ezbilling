import Bill from "@/models/bill.model";
import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";

// MongoDB Connection
connect();

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const reqBody = await request.json();

        const { userId, ...billData } = reqBody; // Destructure userId from reqBody

        
        const newBill = new Bill({ userId, ...billData });

        // Save the new bill to MongoDB
        await newBill.save();

        return NextResponse.json({
            message: "Bill details saved successfully",
            success: true,
            newBill,
        });
    } catch (error) {
        console.error("Error saving bill details:", error);
        return NextResponse.json({
            message: "Failed to save bill details",
            success: false,
        });
    }
}
