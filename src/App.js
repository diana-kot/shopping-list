import React from "react";
import { Route, Routes } from "react-router-dom";
import cn from "classnames";

import List from "@components/List";
import ShoppingList   from "./components/ShoppingList";

import ListMain from './pages/ListMain'
// import WrapperTasks from "@components/WrapperTasks";
// import TaskList from "@pages/TaskList";

function App() {
  return (
    <div className={cn("wrapper", "wrapper__container", "container")}>
      <main className="main">
      <Routes>
          <Route path="/" element={<ListMain />}>
            <Route path="chats/:chatId" element={<List />}></Route>
          </Route>
          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;