import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query") || "";

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
        // баг на VERCEL, не работает insensitive при разработке, в продакшн вроде все норм
      },
    },
    take: 5,
  });

  return NextResponse.json(products);
}
