import React from "react";
import { useSelector } from "react-redux";
import { Reorder } from "framer-motion";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import EditButton from "../EditButton";

import styles from "./Task.module.scss";

export const Task = ({ id, task, index }) => {
  return (
    <Draggable key={index} draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <li className={styles.grid}>
            <>
              <div className={styles.grid__item}>{task.text}</div>
              <div className={styles.grid__item}>{task.count}</div>
              <div className={styles.grid__item}>{task.izm}</div>
              <EditButton id={id} task={task} />
            </>
          </li>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
