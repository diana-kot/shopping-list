import {
  ADD_LIST_TASKS,
  DELETE_LIST_TASKS,
  ADD_TASK,
  COMPLETED_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SET_TASKS,
  SET_LOADED,
  SORT_BY_ASC,
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
    case COMPLETED_TASK: {
     const taskCompleIndex = action.payload.idToComplete // индекс элемента, который надо перенести в конец
    // const taskCompleted = state.tasks[action.payload.listId].splice(taskCompleIndex, 1)[0]
    const taskCompleted = state.tasks[action.payload.listId][taskCompleIndex]
    // console.log(taskCompleted)
        
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.listId]: state.tasks[action.payload.listId]

            .map((task) =>
              task.id === action.payload.idToComplete
                ? { ...task, completed: !task.completed }
                : { ...task }
            )
            // .filter(
            //   (task) => task.completed !== true
            //   // ? completedTasks.push(task)[action.payload.listId]
            //   // : state.tasks[action.payload.listId].splice(taskCompleIndex, 1)
            // )

     

        // .splice(taskCompleIndex, 1)
        //  .push(taskCompleIndex)

        // .splice(1, 2, taskCompleted)
        },
      };
      
    }

      // const completedTasks = {
      //   tasks: {
      //     [action.payload.listId]: state.tasks[action.payload.listId]
      //     .filter(
      //       (task) => task.id === taskCompleIndex
            
      //     ),
      //   },
      // };
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
      const task = state.tasks[listId].splice(droppableIndexStart, 1);
      // const droppedTask = state.tasks[listId]
      const newState = {
        ...state,
        tasks: {
          ...state.tasks,
          [listId]: state.tasks[listId].splice(droppableIndexEnd, 0, ...task),
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

      debugger;
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
                izm: newEzn,
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
