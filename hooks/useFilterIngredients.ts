'use client';
import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { FileMinus } from "lucide-react";
import React, { use } from "react";
import { useSet } from "react-use";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

/**
 * Хук для загрузки списка ингредиентов. 
 * 
 * @returns {ReturnProps} 
 *   - ingredients: список ингредиентов 
 *   - loading: флаг загрузки 
 *   - selectedIds: множество id выбранных ингредиентов 
 *   - onAddId: функция добавления/удаления id из selectedIds 
 */
export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
	const [loading, setLoading] = React.useState(false);

  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

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
  
  return { ingredients, loading, onAddId: toggle, selectedIds };
};
