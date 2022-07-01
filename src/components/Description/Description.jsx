import React, { useState } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "@store/List/actions";
import { addTask } from "@store/Tasks/actions";
import { useParams, useNavigate } from "react-router-dom";

import { addListTasks } from "@store/Tasks/actions";

import styles from "./Description.module.scss";

const Description = ({ description, title }) => {
  const { recipId } = useParams();

  const [isLoading, setIsLoading] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector(({ lists }) => lists.lists);
  const addProduct = (text, count, izm) => {
    setIsLoading(true);

    const findItem = lists.find((obj) => obj.id === recipId);

    if (!findItem) {
      dispatch(addList(recipId, title));
      dispatch(addListTasks(recipId));
    }

    const obj = {
      text: text,
      count: count,
      izm: izm,
      id: `tsk-${Date.now()}`,
    };

    dispatch(addTask(recipId, obj));
    setIsLoading(false);
  };

  return (
    <ul>
      {description.map((des) => (
        <div className={styles.message__list} key={`des${recipId}`}>
          <li className={styles.grid}>
            <>
              <div className={styles.grid__item}>{des.text}</div>
              <div className={styles.grid__item}>{des.count}</div>
              <div className={styles.grid__item}>{des.izm}</div>
              <div
                onClick={() => addProduct(des.text, des.count, des.izm)}
                className={cn(styles.grid__item, styles.grid__item__modif)}
              >
                <span>Добавить</span>
              </div>
            </>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Description;
