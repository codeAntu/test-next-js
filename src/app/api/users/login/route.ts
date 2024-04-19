import { connectToDatabase } from "@/dbConfig/dbConfig";
import User from "@/modules/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

connectToDatabase();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid)
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });

    const tokenData = {
      id: user._id,
      email: email,
      password: password,
    };

    const secretOrPrivateKey = process.env.MY_SECRET!;
    const token = await jwt.sign(tokenData, secretOrPrivateKey, {
      expiresIn: "1d",
    });

    const response = NextResponse.json(
      { message: "User logged in successfully", token },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
