import { Ingredient, ProductItem } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { calcPizzaTotalPrice } from "./calc-pizza-total-price";

export const getPizzaDetails = (
  items: ProductItem[],
  type: PizzaType,
  size: PizzaSize,
  selectedIngredients: Set<number>,
  ingredients: Ingredient[]
) => {
  const totalPrice = calcPizzaTotalPrice(
    items,
    type,
    size,
    selectedIngredients,
    ingredients
  );
  const textDetails = `${size} см, ${String(mapPizzaType[type]).toLowerCase()} тесто`;

  return { textDetails, totalPrice };
};