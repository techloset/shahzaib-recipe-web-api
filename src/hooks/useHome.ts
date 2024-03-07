import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { Category } from "../types/types";
import { searchRecipes } from "../redux/slices/searchRecipeSlice";
import { useParams } from "react-router-dom";
import { fetchMeals } from "../redux/slices/recipeMealSlice";

const useHome = () => {

  const dispatch = useDispatch<AppDispatch>();

  const { searchQuery } = useParams();

  const mealArray: Category[] = useSelector(
    (state: RootState) => state.meals.meals
  );
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth >= 785
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      dispatch(fetchMeals());
    if (searchQuery) {
      dispatch(searchRecipes(searchQuery));
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsLargeScreen(window.innerWidth >= 785);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  }, [dispatch, searchQuery]);

  const sliceInstructions = (instructions: string): string => {
    if (windowWidth >= 1024) {
      return instructions.slice(0, 265);
    } else if (windowWidth >= 785) {
      return instructions.slice(0, 100);
    } else {
      return instructions.slice(0, 80);
    }
  };

  return {
    mealArray,
    windowWidth,
    setIsLargeScreen,
    sliceInstructions,
    isLargeScreen,
    loading
  };
};

export default useHome;
