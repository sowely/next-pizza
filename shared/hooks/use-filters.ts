import { useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  prices: PriceProps;
  selectedIngredients: Set<string>;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (key: string) => void;
  setSizes: (key: string) => void;
  setSelectedIngredients: (key: string) => void;
}

/* Хук, который возвращает фильтры */
export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  /* Фильтр ингредиентов */
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(","))
  );

  const setSelectedIngredients = (ids: string[]) => {
    ids.forEach(selectedIngredients.add);
  };

  /* Фильтр стоимости */
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  /* Фильтр размеров */
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams.get("sizes")?.split(",") || [])
  );

  /* Фильтр типа пиццы */
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(searchParams.get("pizzaTypes")?.split(",") || [])
  );

  return {
    sizes,
    pizzaTypes,
    prices,
    selectedIngredients,
    setPrices: updatePrice,
    setPizzaTypes: togglePizzaTypes,
    setSizes: toggleSizes,
    setSelectedIngredients: toggleIngredients,
  };
};
