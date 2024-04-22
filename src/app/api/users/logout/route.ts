import { connectToDatabase } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

// connectToDatabase();

export async function GET() {
  try {
    const response = NextResponse.json(
      {
        message: "Logout successful",
      },
      {
        status: 200,
      }
    );

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return response;
  } catch (e: any) {
    NextResponse.json(
      {
        message: e.message,
      },
      {
        status: 500,
      }
    );
  }
}
