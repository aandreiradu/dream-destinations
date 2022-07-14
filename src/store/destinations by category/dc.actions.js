import { DESTINATIONS_BY_CATEGORY_TYPES } from "./dc.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategories } from "../../utils/firebase/firebase.utils";
import { sortByTrending } from "../../utils/utils/utils";

export const setDestinationCategory = (destinationsArray, categorySelected) => {
  const updatedDestinationsByCategory = destinationsArray?.filter(
    (destination) => {
      const { categories } = destination;
      if (categories.includes(categorySelected)) {
        return destination;
      }
    }
  );
  
  return createAction(DESTINATIONS_BY_CATEGORY_TYPES.SET_CATEGORIES, {
    destinationsCategory: updatedDestinationsByCategory,
    userCategorySelected: categorySelected,
  });
};

export const fetchCategoriesStart = () => {
  return createAction(DESTINATIONS_BY_CATEGORY_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  return createAction(
    DESTINATIONS_BY_CATEGORY_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};

export const fetchCategoriesFailure = (error) => {
  return createAction(
    DESTINATIONS_BY_CATEGORY_TYPES.FETCH_CATEGORIES_FAILED,
    error
  );
};

export const fetchCategoriesStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategories();
      const trendingFirst = sortByTrending(categoriesArray);
      dispatch(fetchCategoriesSuccess(trendingFirst));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};


export const setCategoryActive = (categoryId) => {
  return createAction(
    DESTINATIONS_BY_CATEGORY_TYPES.SET_CATEGORY_ACTIVE,
    categoryId
  )
}
