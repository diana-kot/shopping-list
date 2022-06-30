import axios from "axios";

export const SET_RECIPES = "RECIPES::SET_RECIPES";
export const SET_LOADED = "LOADED::SET_LOADED";

export const fetchRecipes = () => (dispatch) => {
  axios.get(`http://localhost:3002/recipes`).then(({ data }) => {
    dispatch(setRecipes(data));
  });
};

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  payload: recipes,
});

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});
