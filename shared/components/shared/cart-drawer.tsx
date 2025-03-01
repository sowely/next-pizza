import { cn } from '@/shared/lib/utils';
import React, { PropsWithChildren } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/shared/components/ui";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { CartDrawerItem } from './cart-drawer-item';

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
                    <SheetDescription />
                </SheetHeader>

                {/* Items */}
                <div className='-mx-6 overflow-y-auto flex flex-col gap-2'>
                    <CartDrawerItem id={0} imageUrl={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'} details={'Традиционное, 20 см'} name={'Pizza'} price={60} quantity={10} />
                    <CartDrawerItem id={1} imageUrl={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'} details={'Традиционное, 20 см'} name={'Pizza'} price={60} quantity={10} />
                    <CartDrawerItem id={2} imageUrl={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'} details={'Традиционное, 20 см'} name={'Pizza'} price={60} quantity={10} />
                </div>
                

                <SheetFooter className='-mx-6 bg-white p-8'>
                    <div className='w-full'>

                        <div className='flex mb-4'>
                            <span className='flex flex-1 text-lg text-neutral-500'>
                                Итого
                                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                            </span>
                            <span className='font-bold text-lg'>500 р</span>
                        </div>

                        <Link href='/cart'>
                            <Button
                                type='submit'
                                className='w-full h-12 text-base'
                            >
                                Оформить заказ
                                <ArrowLeft className='w-5 ml-2' />
                            </Button>
                        </Link>
                    </div>
                </SheetFooter>

            </SheetContent>
        </Sheet>
    )
}