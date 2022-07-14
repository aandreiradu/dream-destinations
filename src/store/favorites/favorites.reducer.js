import { FAVORITES_ACTION_TYPES } from "./favorites.types";

const initialFavoritesDestinations = {
  favoriteDestinations: [],
};

export const favoritesDestinationsReducer = (state = initialFavoritesDestinations, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case FAVORITES_ACTION_TYPES.REMOVE_DESTINATION_FROM_FAVORITES:
      return {
        ...state,
        favoriteDestinations: payload,
      };

    case FAVORITES_ACTION_TYPES.ADD_DESTINATION_TO_FAVORITES :
        return {
          ...state,
          favoriteDestinations : payload
        }

    default: 
      return state;
  }
};
