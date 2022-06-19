import {
  ADD_LIST_TASKS,
  DELETE_LIST_TASKS,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SET_TASKS,
  SET_LOADED,
} from "./actions";

export const tasksState = {
  tasks: { 
    1: [
    {
      text: "квартира",
      count: "1",
      izm: "шт.",
      id: "1"
    },
    {
      text: "квар",
      count: "16",
      izm: "шт.",
      id: "2"
    }
  ]
},
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
          [action.id]: [...state.tasks[action.id], action.tasks],
        },
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((list) => list.id !== action.id),
      };
    }

    // case DELETE_MESSAGE: {
    //   return {
    //     ...state,
    //     [action.idchat]: state.messages[action.idchat].filter(message => message.id !== action.delete),
    //     };
    // }
    default:
      return state;
  }
};
