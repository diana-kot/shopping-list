import React, { useState } from "react";

import styles from "./Recipes.module.scss";
import RecipesList from "@components/RecipesList";

const Recipes = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.recipes}>
      <h3>Рецепты</h3>
      {isLoading ? <p>Загрузка списка...</p> : <RecipesList />}
    </div>
  );
};

export default Recipes;
