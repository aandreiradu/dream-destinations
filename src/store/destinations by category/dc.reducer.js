import { DESTINATIONS_BY_CATEGORY_TYPES } from "./dc.types";

const initialDestinationsCategory = {
  isLoading: false,
  userCategorySelected: null,
  categoryActive: null,
  selectedCategory : null,
  destinationsCategory: [],
  error: null,
};

export const destinationsCategoryReducer = (
  state = initialDestinationsCategory,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case DESTINATIONS_BY_CATEGORY_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };

    case DESTINATIONS_BY_CATEGORY_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        selectedCategory: payload,
        isLoading: false,
      };

    case DESTINATIONS_BY_CATEGORY_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case DESTINATIONS_BY_CATEGORY_TYPES.SET_CATEGORIES:
      return {
        ...state,
        destinationsCategory: payload.destinationsCategory,
        userCategorySelected : payload.userCategorySelected
      };

    case DESTINATIONS_BY_CATEGORY_TYPES.SET_CATEGORY_ACTIVE :
        return {
          ...state,
          categoryActive : payload
        }

    default:
      return state;
  }
};
