import { combineReducers } from "redux";
import { favoritesDestinationsReducer } from "./favorites/favorites.reducer";
import { destinationsReducer } from "./destinations/destinations.reducer";
import { destinationsCategoryReducer } from "./destinations by category/dc.reducer";

export const rootReducer = combineReducers({
  destinations: destinationsReducer,
  favorites: favoritesDestinationsReducer,
  destinationsCategory: destinationsCategoryReducer,
});
