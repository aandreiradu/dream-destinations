import { DESTINATION_TYPES } from "./destionation.types";

const inititalDestinations = {
  isLoading: false,
  destinations: [],
  error: null,
};

export const destinationsReducer = (
  state = inititalDestinations,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case DESTINATION_TYPES.FETCH_TREDING_DESTINATIONS_START:
      return {
        ...state,
        isLoading: true,
      };

    case DESTINATION_TYPES.FETCH_TREDING_DESTINATIONS_SUCCESS:
      return {
        ...state,
        destinations: payload,
        isLoading: false,
      };

    case DESTINATION_TYPES.FETCH_TREDING_DESTINATIONS_FAILED: {
      return {
        ...state,
        error: payload,
      };
    }

    default:
      return state;
  }
};
