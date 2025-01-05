'use client'

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { useCategoryStore } from "@/shared/store/category";
import { Category } from '@prisma/client';

interface Props {
	categories: Category[];
	className?: string;
}

export const Categories: React.FC<Props> = ({ categories, className }) => {
	const categoryId = useCategoryStore(state => state.activeId);

	return (
		<div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
			{categories.map(category => (
				<a

					key={category.id}
					href={`#${category.name}`}
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						categoryId === category.id && 'bg-white shadow-md shadow-gray-200 text-primary',
					)}>
					<button>{category.name}</button>
				</a>
			))}
		</div>
	);
};