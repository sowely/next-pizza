import { ProductItem } from "@prisma/client";
import { pizzaSizes, PizzaType } from "../constants/pizza";
import { Variant } from "../components/shared/group-variants";

export const getAvailablePizzaSizes = (items: ProductItem[], type: PizzaType, ): Variant[] => {
    const filteredPizzasByType = items.filter(pizza => pizza.pizzaType === type);

    return pizzaSizes.map(item => ({
        value: item.value,
        name: item.name,
        disabled: !filteredPizzasByType.some(pizza => Number(pizza.size) === Number(item.value))
    }))
}