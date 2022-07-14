import { createSelector } from "reselect";

const selectDestinationsReducer = (state) => state.destinations;

export const selectDestinations = createSelector(
  [selectDestinationsReducer],
  (destinations) => destinations.destinations
);
