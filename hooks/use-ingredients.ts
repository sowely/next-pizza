import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";

/**
 * Хук, который загружает список ингредиентов и
 * возвращает массив ингредиентов и флаг загрузки
 * 
 * @returns 
 * {
 *   ingredients: Ingredient[], // массив ингредиентов
 *   loading: boolean // флаг загрузки
 * }
 */

 export const useIngredients = () => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [loading, setLoading] = React.useState(false);
    
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
      loading
    };
}