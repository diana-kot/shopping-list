import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDescription } from "@store/Description/actions";

import Button from "@components/Button";
import Description from "@components/Description";

import styles from "./FullRecipes.module.scss";

const FullRecipes = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(({ recipes }) => recipes.isLoaded);
  const description = useSelector(({ description }) => description.description);

  const [recip, setRecip] = React.useState();

  const { recipId } = useParams();
  console.log(recipId)
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(fetchDescription());
  }, []);

  React.useEffect(() => {
    async function fetchRecip() {
      try {
        const { data } = await axios.get("http://localhost:3002/recipes/" + recipId);
        setRecip(data);
      } catch (error) {
        alert("Ошибка при получении рецепта!");
        navigate("/");
      }
    }

    fetchRecip();
  }, []);

  if (!recip) {
    return "Загрузка...";
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.recip}>
          <Link to="/recipes">
            <Button text={"Назад"}></Button>
          </Link>
          <div className={styles.recip__image}></div>
          <img src={recip.imageUrl} alt={recip.title} />
          <p className={styles.recip__title}>{recip.title}</p>
        </div>

        {description[recipId] ? (
          <div>
            <Description 
            title={recip.title}
            description={description[recipId]} />
          </div>
        ) : (
          <>
            <p>описание рецепта отсутствует(</p>
          </>
        )}
      </div>
    </>
  );
};

export default FullRecipes;
