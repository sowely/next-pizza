import { FC } from "react";
import { cn } from "@/shared/lib/utils";
import { CartButton, Container } from ".";
import { Button } from "../ui";
import Image from "next/image";
import { ArrowRight, Search, ShoppingCart, User } from "lucide-react";
import { SearchInput } from "./search-input";
import Link from "next/link";

interface Props {
    className?: string
}

export const Header: FC<Props> = ({ className }) => {
    return <header className={cn('border ', className)}>
        <Container className='flex items-center justify-between py-8'>
            {/* Left side */}
            <Link href='/'>
                <div className='flex items-center gap-4'>
                    <Image src='/logo.png' alt='Logo' width={35} height={35} /> 
                    <div>
                        <h1 className='text-2xl uppercase font-black'>Pizza</h1>
                        <p className='text-sm lowercase text-gray-400 leading-3'>Самая вкусная</p>
                    </div>
                </div>
            </Link>
            {/* Search */}
            <div className="mx-10 flex-1">
                <SearchInput />
            </div>
            {/* Right side */}
            <div className='flex items-center gap-3'>
                <Button variant='outline' className='flex items-center gap-1'>
                    <User size={16} />
                    Войти
                </Button>
                
                <CartButton />
            </div>
        </Container>
    </header>
}