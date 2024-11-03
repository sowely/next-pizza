'use client';
import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React, { use } from "react";
import { useSet } from "react-use";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIngredients: Set<string>;
  onAddId: (id: string) => void;
}


/**
 * Хук для загрузки и управления списком ингредиентов.
 *
 * @returns {ReturnProps} 
 *   - ingredients: список ингредиентов
 *   - loading: флаг загрузки
 *   - selectedIngredients: множество id выбранных ингредиентов
 *   - onAddId: функция добавления/удаления id из selectedIngredients
 */
export const useFilterIngredients = (values: string[] = []): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
	const [loading, setLoading] = React.useState(false);

  const [selectedIngredients, { toggle }] = useSet(new Set<string>(values));

  React.useEffect(() => {
    // при первой загрузке
    // так как useEffect не умеет в async => не умеет в try catch =>
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);
  
  return {
    ingredients,
    loading,
    onAddId: toggle,
    selectedIngredients,
  };
};
