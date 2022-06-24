import {
  ADD_LIST_TASKS,
  DELETE_LIST_TASKS,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SET_TASKS,
  SET_LOADED,
  SORT_BY_ASC,
} from "./actions";

export const tasksState = {
  tasks: {},
  isLoaded: false,
  isLoadingFailed: false,
};

export const tasksReducer = (state = tasksState, action) => {
  switch (action.type) {
    case ADD_LIST_TASKS: {
      return {
        ...state,
        tasks: { ...state.tasks, [action.id]: [] },
      };
    }
    case DELETE_LIST_TASKS: {
      delete state.tasks[action.id];
      return {
        ...state,
        tasks: { ...state.tasks },
      };
    }
    case SET_TASKS: {
      return {
        ...state,
        tasks: action.payload,
        isLoaded: true,
      };
    }
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case ADD_TASK: {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.id]: [...state.tasks[action.id], action.task],
        },
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.listId]: state.tasks[action.payload.listId].filter(
            (task) => task.id !== action.payload.idToDelete
          ),
        },
      };
    }
    case EDIT_TASK: {
      const { listId, idToEdit, newText, newCount, newEzn } = action.payload;
      const editIndex = state.tasks[listId].findIndex(
        (task) => task.id === idToEdit
      );

      const newState = { ...state };
      newState.tasks[listId][editIndex] = {
        ...newState.tasks[listId][editIndex],
        text: newText,
        count: newCount,
        ezn: newEzn,
      };
      return newState;
    }
    case SORT_BY_ASC:
      const { listId } = action.payload;
      const sortByAlphabetState = { ...state };
      sortByAlphabetState.tasks[listId] =
        action.payload.direction === "asc"
          ? sortAsc(sortByAlphabetState.tasks[listId], "name")
          : sortDesc(sortByAlphabetState.tasks[listId], "name");
      // sortByAlphabetState.filteredProducts = sortedAlphabetArr;
      // sortByAlphabetState.appliedFilters = addFilterIfNotExists(SORT_BY_ASC, sortByAlphabetState.appliedFilters);
      // sortByAlphabetState.appliedFilters = removeFilter(SORT_BY_ASC, sortByAlphabetState.appliedFilters);

      return sortByAlphabetState;
    default:
      return state;
  }
};

function sortAsc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return 1;

    if (b[field] > a[field]) return -1;

    return 0;
  });
}

function sortDesc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return -1;

    if (b[field] > a[field]) return 1;

    return 0;
  });
}

function addFilterIfNotExists(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  if (index === -1) appliedFilters.push(filter);

  return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  appliedFilters.splice(index, 1);
  return appliedFilters;
}
