"use client";

import React from "react";
// import { useSet } from 'react-use';

import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui/input";
import { Skeleton } from "../ui";
import { useSet } from "react-use";

interface Props {
	title: string;
	items: FilterCheckboxProps[];
	defaultItems?: FilterCheckboxProps[];
	limit?: number;
	loading?: boolean;
	searchInputPlaceholder?: string;
	onClickCheckbox?: (id: string) => void;
	defaultValue?: string[];
	selected?: Set<string>;
	className?: string;
	name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	loading,
	searchInputPlaceholder = "Поиск...",
	className,
	onClickCheckbox,
	defaultValue,
	selected, 
	name
}) => {
	const [showAll, setShowAll] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState("");
	const [set, { toggle }] = useSet(new Set([]));

	// const onCheckedChange = (value: string) => {
	//   toggle(value);
	// };

	// React.useEffect(() => {
	//   if (defaultValue) {
	//     defaultValue.forEach(add);
	//   }
	// }, [defaultValue?.length]);

	// React.useEffect(() => {
	//   onChange?.(Array.from(selected));	
	// }, [selected]);

	if (loading) {
		return (
			<div className={className}>
				<p className="font-bold mb-3">{title}</p>
				{
					... Array(limit).fill(null).map((_, index) => (
						<Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
					))
				}
				<Skeleton className="h-6 w-32 mb-4 rounded-[8px]" />
			</div>
		);
	}

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	};

	const list = showAll
		? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
		: (defaultItems || items);

	return (
		<div className={className}>
			<p className="font-bold mb-3">{title}</p>

			{showAll && (
				<div className="mb-5">
					<Input
						value={searchValue}
						onChange={handleSearchChange}
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
					/>
				</div>
			)}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, i) => (
					<FilterCheckbox
						key={i}
						name={name}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
						checked={selected?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
					/>
				))}
			</div>


			{
				items.length > limit &&
				<div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
					<button
						onClick={() => setShowAll(!showAll)}
						className="text-primary mt-3"
					>
						{showAll ? "Скрыть" : "+ Показать все"}
					</button>
				</div>
			}
		</div>
	)
};
