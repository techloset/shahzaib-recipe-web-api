import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { useParams } from "react-router-dom";
import { fetchMeals } from "../redux/slices/recipeMealSlice";
import { Recipe } from "../types/types";
import { Category, SearchRecipeHookResult } from "../types/types";

const useSearchRecipes = (): SearchRecipeHookResult => {
  const { recpieId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const mealArray = useSelector((state: RootState) => state.meals.meals);

  const searchResults = useSelector(
    (state: RootState) => state.mealFetch.searchResults
  );
  const error = useSelector((state: RootState) => state.meals.error);
  const [recipieData, setRecipieData] = useState<Recipe | null>(null);
  const listStyle: React.CSSProperties = {
    listStyleType: "disc",
  };

  useEffect(() => {
    dispatch(fetchMeals());
    const matchRecipieId = mealArray.find(
      (recipies: Category) => recipies.idMeal.toString() === recpieId
    );
    if (matchRecipieId) {
      setRecipieData(matchRecipieId as Recipe);
    }
  }, [mealArray, recpieId, dispatch]);

  if (error) {
    return {
      recipieData: null,
      setRecipieData: setRecipieData,
      listStyle: listStyle,
    };
  }

  if (recipieData === null) {
    return {
      recipieData: null,
      setRecipieData: setRecipieData,
      listStyle: listStyle,
    };
  }

  if (searchResults === null) {
    return {
      recipieData: null,
      setRecipieData: setRecipieData,
      listStyle: listStyle,
    };
  }

  return {
    recipieData,
    setRecipieData,
    listStyle,
  };
};

export default useSearchRecipes;
