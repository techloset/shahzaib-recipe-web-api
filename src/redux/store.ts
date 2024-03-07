import { configureStore } from "@reduxjs/toolkit";
import MealSlices from "./slices/recipeMealSlice";
import mealFetchSlice from "./slices/searchRecipeSlice";

const store = configureStore({
  reducer: {
    meals: MealSlices,
    mealFetch: mealFetchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
