import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch,RootState } from "../redux/store";
import { fetchMeals } from "../redux/slices/recipeMealSlice";
import { Category } from "../types/types";
import { searchRecipes } from "../redux/slices/searchRecipeSlice";

const useStore = () => {
  const { searchQuery } = useParams();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dispatch = useDispatch<AppDispatch>();
  const mealArray: Category[] = useSelector(
    (state: RootState) => state.meals.meals
  );
  const searchResults = useSelector(
    (state: RootState) => state.mealFetch.searchResults
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    dispatch(fetchMeals());
    if (searchQuery) {
      dispatch(searchRecipes(searchQuery));
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, searchQuery]);

  const sliceInstructions = (instructions: string): string => {
    if (windowWidth >= 1024) {
      return instructions.slice(0, 265);
    } else if (windowWidth >= 768) {
      return instructions.slice(0, 120);
    } else {
      return instructions.slice(0, 100);
    }
  };
  return {
    sliceInstructions,
    mealArray,
    searchResults,
    windowWidth,
  }
};

export default useStore;
