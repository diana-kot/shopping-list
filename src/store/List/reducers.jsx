import { SET_LISTS, SET_LOADED, ADD_LIST, DELETE_LIST } from "./actions";

export const initialState = {
  lists: [
    // {
    //   id: 1,
    //   name: "Одежда",
    // },
    // {
    //   id: 2,
    //   name: "Продукты",
    // }
  ],
  isLoaded: false,
  isLoadingFailed: false,
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTS: {
      return {
        ...state,
        lists: action.payload,
        isLoaded: true,
      };
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
