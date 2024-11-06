
import qs from "qs";
import React from "react";
import { Filters } from "./use-filters";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
	const router = useRouter();

    React.useEffect(() => {
      const params = {
        ...filters.prices,
        pizzaTypes: Array.from(filters.pizzaTypes),
        sizes: Array.from(filters.sizes),
        ingredients: Array.from(filters.selectedIngredients),
      };
      //  Нужно конвертировать значения filters(params) в адресную строку с помощью qs
      const query = qs.stringify(params, { arrayFormat: "comma" });

      router.push(`?${query}`, { scroll: false });
    }, 
    [filters, router]);
}