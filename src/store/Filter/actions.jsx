export const SET_SORT = "FILTER::SET_SORT";
export const SET_SERCH_VALUE = "FILTER::SET_SERCH_VALUE";

export const setSearchValue = (searchValue) => ({
  type: SET_SERCH_VALUE,
  payload: searchValue,
});

// export const setSort = (sortField, sortDirection) => ({
//   type: SET_SORT,
//   payload: { sortField, sortDirection },
// });
