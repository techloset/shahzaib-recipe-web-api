import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, AppDispatch } from "../redux/store";
import { fetchMeals } from "../redux/slices/recipeMealSlice";
import { searchRecipes } from "../redux/slices/searchRecipeSlice";

const Recipes = () => {
  const { searchQuery } = useParams<{ searchQuery: string }>();

  const dispatch = useDispatch<AppDispatch>();

  const searchResults = useSelector(
    (state: RootState) => state.mealFetch.searchResults
  );

  useEffect(() => {
    dispatch(fetchMeals());
    if (searchQuery) {
      dispatch(searchRecipes(searchQuery));
    }
  }, [dispatch, searchQuery]);

  const handleSearch = (searchQuery: string) => {
    dispatch(searchRecipes(searchQuery));
  };

  return {
    searchQuery,
    searchResults,
    handleSearch,
  };
};

export default Recipes;
