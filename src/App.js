import React from "react";
import { Route, Routes } from "react-router-dom";
import cn from "classnames";

import WrapperTasks from "@components/WrapperTasks";
import TaskList from "@pages/TaskList";

import "./scss/app.scss";

function App() {
  return (
    <div className={cn("wrapper", "wrapper__container", "container")}>
      <main className="main">
        <Routes>
          <Route path="/" element={<TaskList />}>
          <Route path="/lists/:listId" element={<WrapperTasks />}/>
          </Route>
          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
