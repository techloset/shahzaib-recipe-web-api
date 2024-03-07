export interface RecipieCardProps {
  image: string;
  titile: string;
  instriuctions: string;
  ingredints?: string;
  recpieId: number;
};
export type Recipe = {
  idMeal: number;
  strMealThumb: string;
  strMeal: string;
  strInstructions: string;
strCategoryDescription: string;
  
};
export interface Category {
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  idMeal: number;
};
// export interface MyError {
//   message: string;
// };
export interface MealFetchState {
  meals: Category[];
  loading: boolean;
  error:null | string;
};
export interface MealSearchState {
  searchResults: Recipe[];
  loading: boolean;
  error: null | string;
};

export interface SearchRecipeHookResult {
  recipieData: Recipe | null;
  setRecipieData: React.Dispatch<React.SetStateAction<Recipe | null>>;
  listStyle: React.CSSProperties;
}
