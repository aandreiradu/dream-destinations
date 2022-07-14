import { FAVORITES_ACTION_TYPES } from "./favorites.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addToFavorites = (destinationItems, destinationToAdd) => {
  const updatedDestinations = [...destinationItems, destinationToAdd];

  return updatedDestinations;
};

const removeFromFavorites = (destinationItems, destionationToRemove) => {
  const updatedDestinations = destinationItems.filter(
    (destination) => destination.id !== destionationToRemove.id
  );

  return updatedDestinations;
};

// Action creators

export const addDestinationToFavorites = (
  destinationItems,
  destinationToAdd
) => {
  // search if its already in favorites
  const existingItemIndex = destinationItems.findIndex(
    (destination) => destination.id == destinationToAdd.id
  );
  const existingItem = destinationItems[existingItemIndex];

  if (existingItem) {
    // just hit the default switch case
    return createAction(null, null);
  }

  const newFavoritesDestinations = addToFavorites(
    destinationItems,
    destinationToAdd
  );

  return createAction(
    FAVORITES_ACTION_TYPES.ADD_DESTINATION_TO_FAVORITES,
    newFavoritesDestinations
  );
};

export const removeDestinationFromFavorites = (
  destinationItems,
  destinationToRemove
) => {
  const newDestinationItems = removeFromFavorites(
    destinationItems,
    destinationToRemove
  );

  return createAction(
    FAVORITES_ACTION_TYPES.REMOVE_DESTINATION_FROM_FAVORITES,
    newDestinationItems
  );
};
