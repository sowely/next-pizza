import { cn } from '@/shared/lib/utils';
import React, { PropsWithChildren } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface Props {
    className?: string;
    isOpen: boolean,
    setIsOpen: (value: boolean) => void
}

export const CartDrawer: React.FC<PropsWithChildren<Props>> = ({ className, children, isOpen, setIsOpen }) => {
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'>
                <SheetHeader>
                    <SheetTitle>
                        В корзине <span className='font-bold'>{3} товаров</span>
                    </SheetTitle>
                    <SheetDescription>Description goes here</SheetDescription>
                </SheetHeader>

                {/* Items */}

                <SheetFooter className='-mx-6 bg-white p-8'>
                    <div className='w-full'>

                        <div className='flex mb-4'>
                            <span className='flex flex-1 text-lg text-neutral-500'>
                                Итого
                                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                            </span>
                        </div>

                        <span className='font-bold text-lg'>500 р</span>
                    </div>

                    <Link href={'/cart'}>
                        <Button
                            type='submit'
                            className='w-full h-12 text-base'
                        >
                            Оформить заказ
                            <ArrowRight className='w-5 ml-2' />
                        </Button>
                    </Link>

                </SheetFooter>

            </SheetContent>
        </Sheet>
    )
}