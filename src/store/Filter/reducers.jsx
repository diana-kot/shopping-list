import { SET_SORT, SET_SERCH_VALUE } from "./actions";

export const filterState = {
  searchValue: "",
  categoryId: 0,
  sortField: 'text',
  sortDirection: -1,
};

export const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case SET_SORT: {
      return {
        ...state,
        sortField: action.payload.sortField,
        sortDirection: action.payload.sortDirection,
      };
    }
    case SET_SERCH_VALUE: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }

    default:
      return state;
  }
};
