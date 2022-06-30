import { SET_LOADED, SET_DESCRIPTION } from "./actions";

export const descriptionState = {
  description: {},
  isLoaded: false,
};

export const descriptionReducer = (state = descriptionState, action) => {
  switch (action.type) {
    case SET_DESCRIPTION: {
      return {
        ...state,
        description: action.payload,
        isLoaded: true,
      };
    }
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};
