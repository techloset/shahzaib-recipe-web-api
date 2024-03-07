import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import instance from "../../instance/instance";
import { Category, Recipe, MealSearchState } from "../../types/types";

export const searchRecipes = createAsyncThunk(
  "meals/searchRecipes",
  async (searchQuery: string) => {
    try {
      const response = await instance.get("search.php?s", {
        params: { q: searchQuery },
      });

      const allRecipes = response.data.meals as Category[];
      const filteredRecipes = allRecipes.filter((recipe) => {
        return recipe.strMeal.toLowerCase().includes(searchQuery.toLowerCase());
      });

      return filteredRecipes as Recipe[];
    } catch (error) {
      throw new Error("Error searching recipes");
    }
  }
);
const initialState: MealSearchState = {
  searchResults: [],
  loading: false,
  error: null,
};

export const mealSearchSlice = createSlice({
  name: "mealSearch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        searchRecipes.fulfilled,
        (state, action: PayloadAction<Recipe[]>) => {
          state.loading = false;
          const recipes = action.payload || [];
          state.searchResults = recipes;
        }
      )
      .addCase(searchRecipes.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export default mealSearchSlice.reducer;
