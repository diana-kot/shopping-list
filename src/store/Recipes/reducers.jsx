import { SET_RECIPES, SET_LOADED } from "./actions";

export const recipesState = {
  recipes: [],
  isLoaded: false,
};

export const recipesReducer = (state = recipesState, action) => {
  switch (action.type) {
    case SET_RECIPES: {
      return {
        ...state,
        recipes: action.payload,
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
