import { prisma } from "@/prisma/prisma-client";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

// функция, отвечающая за получение данных о пользователях
export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
  // return NextResponse.json({
  //     users: ['user1', 'user2', 'user3']
  // })
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log("data: ", data);

  const user = await prisma.user.create({
    data,
  });

  return NextResponse.json(user);
}
