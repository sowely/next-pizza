'use client';
import {
	Title,
	FilterCheckbox,
	RangeSlider,
	CheckboxFiltersGroup,
} from "@/components/shared";
import { Input } from "@/components/ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import React from "react";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
	className?: string;
}

interface PriceProps {
	priceFrom?: number;
	priceTo?: number;
}

interface QueryFilters extends PriceProps {
	pizzaTypes: string;
	sizes: string;
	ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const router = useRouter();
	const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

	const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients();

	const [prices, setPrice] = React.useState<PriceProps>({
		priceFrom: Number(searchParams.get("priceFrom")) || undefined,
		priceTo: Number(searchParams.get("priceTo")) || undefined,
	});
	const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams.get("sizes")?.split(",") || []));
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(searchParams.get("pizzaTypes")?.split(",") || []));

	const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrice({
			...prices,
			[name]: value
		})
	}

	React.useEffect(() => {
		// console.log({ prices, pizzaTypes, sizes, selectedIngredients });
		const filters = {
			...prices,
			pizzaTypes: Array.from(pizzaTypes),
			sizes: Array.from(sizes),
			ingredients: Array.from(selectedIngredients)
		}
		//  Нужно конвертировать значения filters в адресную строку с помощью qs
		// console.log(qs.stringify(filters, { arrayFormat: 'comma' }));
		const query = qs.stringify(filters, { arrayFormat: 'comma' });
		router.push(`?${query}`, { scroll: false });
	}, [prices, pizzaTypes, sizes, selectedIngredients]);	

	return (
		<div className={className}>
			<Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
			{/*  Верхние фильтры  */}

			{/* Фильтр типов теста */}
			<CheckboxFiltersGroup
				title="Тип теста"
				name="pizzaTypes"
				className="mb-5"
				onClickCheckbox={togglePizzaTypes}
				items={[
					{ text: 'Тонкое', value: 'thin' },
					{ text: 'Традиционное', value: 'traditional' }
				]}
				selected={pizzaTypes}
			/>

			{/* Фильтр размеров пиццы */}
			<CheckboxFiltersGroup
				title="Размеры"
				name="sizes"
				className="mt-5"
				items={[
					{ text: '20 см', value: '20' },
					{ text: '30 см', value: '30' },
					{ text: '40 см', value: '40' }
				]}
				onClickCheckbox={toggleSizes}
				selected={sizes}
			/>

			{/* Фильтр цен */}
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-5">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={1000}
						defaultValue={0}
						value={String(prices.priceFrom)}
						onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
					/>
					<Input 
						type="number" 
						min={100} 
						max={1000} 
						placeholder="1000" 
						value={String(prices.priceTo)}
						onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
					/>
				</div>
				<RangeSlider 
					min={0} 
					max={1000} 
					step={10} 
					value={[prices.priceFrom || 0, prices.priceTo || 1000]} 
					onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
				/>
			</div>

			{/* Фильтр ингридиентов */}
			<CheckboxFiltersGroup
				title="Ингредиенты"
				name="ingredients"
				className="mt-5"
				limit={6}
				loading={loading}
				defaultItems={items.slice(0, 6)}
				items={items}
				onClickCheckbox={onAddId}
				selected={selectedIngredients}
			/>
		</div>
	);
};
