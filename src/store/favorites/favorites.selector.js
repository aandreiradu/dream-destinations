import { createSelector } from "reselect";

// get destinations slice
const selectFavoriteDestinationsReducer = (state) => state.favorites;

export const selectFavoriteDestinationItems = createSelector(
  [selectFavoriteDestinationsReducer],
  (destinations) => destinations.favoriteDestinations
);

export const getFavoriteDestinationscount = createSelector(
  [selectFavoriteDestinationsReducer],
  (destinations) => destinations.favoriteDestinations.length
);
