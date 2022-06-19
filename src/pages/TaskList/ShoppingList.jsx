import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import List from "@components/List";
import WrapperTasks from "@components/WrapperTasks";

import styles from "./ShoppingList.module.scss";

const ShoppingList = () => {
  // let history = useNavigate();
  const [activeItem, setActiveItem] = useState(null);
  const lists = useSelector(({ lists }) => lists.lists);

  return (
    <>
      <div className={styles.shopping}>
        <div className={styles.shopping__sidebar}>
          <List
            onClickItem={(item) => {
              setActiveItem(item);
              // history.push(`/lists/${list.id}`);
  
            }}
            activeItem={activeItem}
            isRemovable
          />
        </div>
        <div className={styles.shopping__tasks}>
          <WrapperTasks list={activeItem} />
        </div>
      </div>
    </>
  );
};

export default ShoppingList;
