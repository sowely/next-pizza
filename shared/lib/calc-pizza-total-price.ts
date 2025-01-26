import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

/**
 * Функция для подсчета стоимости пиццы
 * @param items - список вариаций
 * @param type - тип теста пиццы
 * @param size - размер пиццы
 * @param selectedIngredients - выбранные ингредиенты
 * @param ingredients - список ингредиентов
 * @returns number общая стоимость
 */
export const calcPizzaTotalPrice = (
  items: ProductItem[],
  type: PizzaType,
  size: PizzaSize,
  selectedIngredients: Set<number>,
  ingredients: Ingredient[]
) => {
  const pizzaPrice =
    items.find((pizza) => pizza.pizzaType === type && pizza.size === size)
      ?.price || 0;

  const ingredientsPrice = ingredients.reduce(
    (acc, ingredient) =>
      acc + (selectedIngredients.has(ingredient.id) ? ingredient.price : 0),
    0
  );

  return pizzaPrice + ingredientsPrice;
};
