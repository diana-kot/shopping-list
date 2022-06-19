import React from "react";
import cn from "classnames";
import { Link, Outlet } from "react-router-dom";

import AddList from "../../AddList";
import removeSvg from "@assets/img/remove.svg";

import styles from "./Lists.module.scss";

const Lists = ({
  onAddList,
  activeItem,
  isRemovable,
  removeList,
  lists,
  onClickItem,
  open,
  handleDelete,
  name,
  handleOpen,
  handleClose,
  handleSubmit,
  handleChange,
}) => (
  <>
    <div className={styles.shopping__container}>
      <div className={styles.shopping}>
        <div>
          <AddList onAdd={handleSubmit} />
          <div>
            <ul className={styles.shopping__list}>
              {lists &&
                lists.map((obj) => (
                  <Link key={obj.id} to={`/lists/${obj.id}`}>
                    <li
                      key={obj.id}
                      className={cn(
                        activeItem && activeItem.id === obj.id
                          ? styles.active
                          : ""
                      )}
                      onClick={onClickItem ? () => onClickItem(obj) : null}
                    >
                      <span>{obj.name}</span>
                      {isRemovable && (
                        <img
                          className={styles.shopping__list__remove}
                          src={removeSvg}
                          alt="Remove icon"
                          onClick={() => removeList(obj.id)}
                        />
                      )}
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  </>
);

export default Lists;
