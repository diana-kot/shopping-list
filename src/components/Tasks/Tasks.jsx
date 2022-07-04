import React from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Task from "../Task";
import { useDispatch, useSelector } from "react-redux";
import { sort } from "../../store/Tasks/actions";
import styles from "./Tasks.module.scss";

const Tasks = ({ tasks, sortFieldTask }) => {
  const { listId } = useParams();
  const dispatch = useDispatch();
  // const search = searchValue ? `&search=${searchValue}` : "";
  const { searchValue } = useSelector(({ filter }) => filter);

  // const { sortField, sortDirection } = useSelector(({ filter }) => filter);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        listId
      )
    );

    // if (
    //   destination.droppableId === source.droppableId &&
    //   destination.index === source.index
    // ) {
    //   return;
    // }

    // const tasksDropped = Object.assign([], tasks);
    // const droppedTask = tasks[source.index];

    // tasksDropped.splice(source.index, 1);
    // tasksDropped.splice(destination.index, 0, droppedTask);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={listId}>
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {tasks
              .filter((task) => {
                if (
                  task.text.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return true;
                }
                return false;
              })
              .map((task, index) => (
                <div
                  className={
                    task.completed ? styles.strike : styles.message__list
                  }
                  key={task.id}
                >
                  <Task
                    // taskText={sortFieldTask}
                    key={task.id}
                    text={task.text}
                    id={task.id}
                    task={task}
                    index={index}
                  />
                </div>
              ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Tasks;
