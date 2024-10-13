import { FC } from "react";
import { cn } from "@/lib/utils";
import { Container } from "../shared";
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
                    <Image src='/logo.svg' alt='Logo' width={35} height={35} />
                    <div>
                        <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
                        <p className='text-sm lowercase text-gray-400 leading-3'>Вкусней уже некуда</p>
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
                {/* TODO добавить картинки */}
                <div>
                    <Button className='group relative' >
                        <b>500 ₽</b>
                        <span className='h-full w-[1px] bg-white/30 mx-3' />
                        <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                            <ShoppingCart size={16} className='relative' strokeWidth={2} />
                            <b>3</b>
                        </div>
                        <ArrowRight size={20} className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                    </Button>
                </div>
            </div>
        </Container>
    </header>
}