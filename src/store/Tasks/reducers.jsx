import {
  ADD_LIST_TASKS,
  DELETE_LIST_TASKS,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SET_TASKS,
  SET_LOADED,
  SORT_TASK,
} from "./actions";

export const tasksState = {
  tasks: {
    // 1: [
    //   {
    //     text: "квартира",
    //     count: "1",
    //     izm: "шт.",
    //     id: "1",
    //   },
    //   {
    //     text: "квар",
    //     count: "16",
    //     izm: "шт.",
    //     id: "2",
    //   },
    // ],
  },
  isLoaded: false,
  isLoadingFailed: false,
  sortBy: {
    type: '',
    order: '',
  },
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
    case SORT_TASK: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }

    default:
      return state;
  }
};
