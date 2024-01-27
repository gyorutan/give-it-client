import { NextRequest } from "next/server";
import { login } from "./service";

export interface LoginBody {
  studentId: string;
  password: string;
}

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as LoginBody;
  return login(body);
};
