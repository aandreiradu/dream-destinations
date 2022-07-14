import { DESTINATION_TYPES } from "./destionation.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getTrendingDestinations } from "../../utils/firebase/firebase.utils";
import { setDestinationCategory } from "../destinations by category/dc.actions";

export const fetchDestinationsStart = () => {
  return createAction(DESTINATION_TYPES.FETCH_TREDING_DESTINATIONS_START);
};

export const fetchDestinationsSuccess = (destinationsArray) => {
  return createAction(
    DESTINATION_TYPES.FETCH_TREDING_DESTINATIONS_SUCCESS,
    destinationsArray
  );
};

export const fetchDestinationsFailure = (error) => {
  return createAction(
    DESTINATION_TYPES.FETCH_TREDING_DESTINATIONS_FAILED,
    error
  );
};

export const fetchDestinationsStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchDestinationsStart());

    try {
      const destinationsArray = await getTrendingDestinations();
      console.log("destinationsArray", destinationsArray);
      dispatch(fetchDestinationsSuccess(destinationsArray));
      dispatch(setDestinationCategory(destinationsArray,'trending'))
    } catch (error) {
      dispatch(fetchDestinationsFailure(error));
    }
  };
};
