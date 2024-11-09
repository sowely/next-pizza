import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation";

export default async function ProductPage ({params: {id}} : {params: {id: string}}) {

    const product = await prisma.product.findFirst({ where: { id: Number(id) }});
    
console.log(product,228);


    if (!product) {
        return notFound();
    }

    return <div>{product.name}</div>
}