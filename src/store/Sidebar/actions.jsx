import axios from "axios";

export const ADD_LIST = 'LISTS::ADD_LIST'
export const DELETE_LIST = 'LISTS::DELETE_CHAT'
export const SET_LISTS = "LISTS::SET_CARDS";
export const SET_LOADED = "LOADED::SET_LOADED";

export const fetchLists = () => (dispatch) => {
  axios.get("http://localhost:3002/lists").then(({ data }) => {
    dispatch(setLists(data));
  });
};

export const removeList = () => (dispatch) => {
  if (window.confirm('Вы действительно хотите удалить список?')) {
    // axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
    //   onRemove(item.id);
    // });
  }
}

export const setLists = (lists) => ({
  type: SET_LISTS,
  payload: lists,
});

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const addList = (listId, listName) => ({
  type: ADD_LIST,
  id: listId,
  name: listName,
})

export const deleteList = (listId) => ({
  type: DELETE_LIST,
  id: listId,
})