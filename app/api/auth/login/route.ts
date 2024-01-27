import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/database/mongodb";
import User from "@/database/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
  dbConnect();
  const body = await req.json();
  const { studentId, password } = body;
  const user = await User.findOne({ studentId });
  if (!user) {
    return NextResponse.json({
      success: false,
      message: "아이디 또는 비밀번호가 일치하지 않습니다",
    });
  }
  const comparePassword = await bcrypt.compare(password, user.password!);
  if (!comparePassword) {
    return {
      success: false,
      message: "아이디 또는 비밀번호가 일치하지 않습니다",
    };
  }

  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "2h",
  });

  const response = NextResponse.json({
    success: true,
    message: "로그인되었습니다",
    user,
  });

  response.cookies.set("token", token);

  return response;
};