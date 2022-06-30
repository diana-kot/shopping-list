import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";

import styles from "./CardRecipe.module.scss";

const CardRecipe = ({ id, imageUrl, title, description }) => {
  return (
    <>
      <div className={styles.recipe}>
        <div className={styles.recipe__card}>
          <div className={styles.recipe__card__top}>
            <img
              className={styles.recipe__card__image}
              src={imageUrl}
              alt="recipe-card"
            />
          </div>
          <div className={styles.recipe__card__content}>
            <span className={styles.recipe__card__title}>{title}</span>
            <p className={styles.recipe__card__text}>
              lorem vkhdsvf sdvidyvudfyv iudfivfxuivi xfvufxvuchvchdvdv
              djhvdhjfvd dfhvdfjvdfj dfuvdu...
            </p>
            {/* <p>{description.slice(0, 90)}...</p> */}
          </div>
        </div>
        <div className={styles.recipe__card__action}>
          <Link key={id} to={`/recipes/${id}`}>
            <Button
              text={"Посмотреть рецепт"}
              className={styles.recipe__card__btn}
            ></Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardRecipe;
