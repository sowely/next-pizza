import React from 'react'
import { cn } from "@/shared/lib/utils";
import { Container, Categories, SortPopup } from "@/shared/components/shared";
import { Category } from '@prisma/client';

interface Props {
    categories: Category[]
    className?: string
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Container className='flex items-center justify-between'>
                <Categories categories={categories} />
                <SortPopup />
            </Container>
        </div>
    )

}