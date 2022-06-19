import axios from "axios";

export const ADD_LIST_TASKS = "TASKS::ADD_LIST_TASKS";
export const DELETE_LIST_TASKS = "TASKS::DELETE_LIST_TASKS";
export const ADD_TASK = "TASKS::ADD_TASK";
export const DELETE_TASK = "TASKS::DELETE_TASK";
export const EDIT_TASK = "TASKS::EDIT_TASK";

export const SET_TASKS = "TASKS::SET_TASKS";
export const SET_LOADED = "LOADED::SET_LOADED";

export const fetchTasks = () => (dispatch) => {
  axios.get("http://localhost:3002/tasks").then(({ data }) => {
    dispatch(setTasks(data));
  });
};

// export const removeList = () => (dispatch) => {
//   if (window.confirm('Вы действительно хотите удалить список?')) {
//     // axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
//     //   onRemove(item.id);
//     // });
//   }
// }

export const addListTasks = (listId) => ({
  type: ADD_LIST_TASKS,
  id: listId,
});

export const deleteListTasks = (listId) => ({
  type: DELETE_LIST_TASKS,
  id: listId,
});

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  payload: tasks,
});

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const addTask = (listId, newTask) => ({
  type: ADD_TASK,
  id: listId,
  task: newTask,
});

export const deleteTask = (listId, taskId) => ({
  type: DELETE_TASK,
  listId: listId,
  delete: taskId,
});


// let timeout;

// export const addMessageWithThunk =
//   (chatId, newMessage) => (dispatch, getState) => {
//     dispatch(addMessage(chatId, newMessage));
//     if (newMessage.author !== AUTHORS.BOT) {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => {
//         const msgFromBot = {
//           text: "Hi, I am a BOT",
//           author: AUTHORS.BOT,
//           id: `msg-${Date.now()}`,
//         };
//         dispatch(addMessage(chatId, msgFromBot));
//       }, 1000);
//     }
//   };