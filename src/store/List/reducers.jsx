import { SET_LISTS, SET_LOADED, ADD_LIST, DELETE_LIST } from "./actions";

export const initialState = {
  lists: [],
  isLoaded: false,
  isLoadingFailed: false,
  count: 0,
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTS: {
      const findItem = state.lists.find((obj) => obj.id === action.id);
      if (!findItem) {
        return {
          ...state,
          lists: action.payload,
          isLoaded: true,
        };
      }
    }
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case ADD_LIST: {
      return {
        ...state,
        lists: [...state.lists, { id: action.id, name: action.name }],
      };
    }
    case DELETE_LIST: {
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.id),
      };
    }
    default:
      return state;
  }
};
