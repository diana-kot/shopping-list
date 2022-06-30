import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRecipes } from "../../store/Recipes/actions";

import CardRecipe from "../CardRecipe/CardRecipe";

import styles from "./RecipesList.module.scss";

const RecipesList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(({ recipes }) => recipes.recipes);
  const isLoaded = useSelector(({ recipes }) => recipes.isLoaded);

  React.useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content__items}>
          {isLoaded ? (
            recipes.map((obj) => <CardRecipe key={obj.id} {...obj} />)
          ) : (
            <p>Загрузка...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RecipesList;
