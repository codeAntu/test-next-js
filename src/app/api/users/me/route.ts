import { connectToDatabase } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/modules/userModel";
import { NextRequest, NextResponse } from "next/server";




connectToDatabase();

export async function GET(request : NextRequest) {
  try {
    const id = await getDataFromToken(request);
    const user = await User.findById(id).select("-password");
    return NextResponse.json(user, {
      status: 200,
    });
    
  } catch (error) {
    
  }

}