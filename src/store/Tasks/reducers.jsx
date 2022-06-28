import {
  ADD_LIST_TASKS,
  DELETE_LIST_TASKS,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SET_TASKS,
  SET_LOADED,
  SORT_BY_ASC,
  REORDER_TASK,
  DRAG_HAPPENED,
} from "./actions";

export const tasksState = {
  tasks: {},
  isLoaded: false,
  isLoadingFailed: false,
  direction: "desc",
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
    case REORDER_TASK: {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.id]: [...state.tasks[action.id], action.tasks],
        },
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

    case DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggabledId,
        listId,
      } = action.payload;
      // const editIndex = state.tasks[listId].findIndex(
      //   (task) => task.id === droppableIndexStart
      // );
      // const list = state.lists.find((listId) => droppableIdStart === listId);
      
      const droppedTask = state.tasks[listId].splice(droppableIndexStart, 1)
      const newState = {
        ...state,

        tasks: {
          ...state.tasks,
          [listId]: state.tasks[listId].splice(droppableIndexStart, 1).splice(droppableIndexEnd,0, ...droppedTask
          ),
        },
      };
      // const newState = {
      //   ...state,
      //   // tasks: {
      //   //   ...state.tasks,
      //   //   if (droppableIdStart === droppableIdEnd) {
      //   //     // const list = state.find((listId) => droppableIdStart === listId);
      //   //     const task = state.tasks[listId].splice(droppableIndexStart, 1);
      //   //    task.splice(droppableIndexEnd, 0, ...task);
      //   //   }
      //   // }
      // };

      //  debugger;
      return newState;
    }
    case EDIT_TASK: {
      const { listId, idToEdit, newText, newCount, newEzn } = action.payload;
      const editIndex = state.tasks[listId].findIndex(
        (task) => task.id === idToEdit
      );

      const newState = {
        ...state,
        tasks: {
          ...state.tasks,
          [listId]: state.tasks[listId].map((item, index) => {
            if (editIndex === index) {
              return {
                ...item,
                text: newText,
                count: newCount,
                ezn: newEzn,
              };
            } else {
              return {
                ...item,
              };
            }
          }),
        },
      };
      // newState.tasks[listId][editIndex] = {
      //   ...newState.tasks[listId][editIndex],
      //   text: newText,
      //   count: newCount,
      //   ezn: newEzn,
      // };
      return newState;
    }
    case SORT_BY_ASC:
      const { listId } = action.payload;
      const sortByAlphabetState = {
        ...state,
        tasks: {
          ...state.tasks,
          [listId]:
            state.direction === "asc"
              ? sortDesc(state.tasks[listId], "text")
              : sortAsc(state.tasks[listId], "text"),
        },
        direction: state.direction === "desc" ? "asc" : "desc",
      };
      return sortByAlphabetState;
    default:
      return state;
  }
};

function sortAsc(arr, field) {
  return arr
    .map((obj) => {
      return {
        ...obj,
      };
    })
    .sort(function (a, b) {
      if (a[field] > b[field]) return 1;

      if (b[field] > a[field]) return -1;

      return 0;
    });
}

function sortDesc(arr, field) {
  return arr
    .map((obj) => {
      return {
        ...obj,
      };
    })
    .sort(function (a, b) {
      if (a[field] > b[field]) return -1;

      if (b[field] > a[field]) return 1;

      return 0;
    });
}
