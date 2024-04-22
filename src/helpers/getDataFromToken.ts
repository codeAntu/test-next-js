import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { Token } from "@/types";

export function getDataFromToken(request: NextRequest) {
  try {
    const secretToken = request.cookies.get("token")?.value || "";
    const token: any = jwt.verify(secretToken, process.env.MY_SECRET!);
    return token.id;
  } catch (e: any) {
    console.log("error", e);
  }
}
