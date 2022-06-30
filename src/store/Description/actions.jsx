import axios from "axios";

export const SET_DESCRIPTION = "RECIPES::SET_DESCRIPTION";
export const SET_LOADED = "LOADED::SET_LOADED";

export const fetchDescription = () => (dispatch) => {
  axios.get(`http://localhost:3002/description`)
  .then(({ data }) => {
    dispatch(setDescription(data));
  });
};

export const setDescription = (description) => ({
  
  
  type: SET_DESCRIPTION,
  payload: description,
});

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});
