import { createSelector } from "reselect";

// get destinations category slice
const selectDestinationsCategoryReducer = (state) => state.destinationsCategory;

export const selectCategories = createSelector(
  [selectDestinationsCategoryReducer],
  (dc) => dc.selectedCategory
);

export const selectDestinationsBasedOnCategory = createSelector(
  [selectDestinationsCategoryReducer],
  (dc) => dc.destinationsCategory
);

export const userSelectedCategory = createSelector(
  [selectDestinationsCategoryReducer],
  (dc) => dc.userCategorySelected
);

export const selectActiveCategory = createSelector(
  [selectDestinationsCategoryReducer],
  (dc) => dc.categoryActive
)