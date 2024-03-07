import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import instance from "../../instance/instance";
import { Category, MealFetchState } from "../../types/types";

const initialState: MealFetchState = {
  meals: [],
  loading: true,
  error: null,
};

export const fetchMeals = createAsyncThunk("meals/fetchMeals", async () => {
  try {
    const response = await instance.get("search.php?s");
    return response.data.meals;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const mealFetchSlice = createSlice({
  name: "mealFetch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        fetchMeals.fulfilled,
        (state, action: PayloadAction<{ meals: Category[] }>) => {
          state.loading = false;
          const meals = action.payload?.meals || action.payload || [];
          state.meals = Array.isArray(meals) ? meals : [meals];
        }
      )
      .addCase(fetchMeals.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export default mealFetchSlice.reducer;
