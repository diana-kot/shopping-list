import React from "react";
import { Route, Routes } from "react-router-dom";
import cn from "classnames";

import List from "@components/List";
import ListMain from './pages/ListMain'

function App() {
  return (
    <div className={cn("wrapper", "wrapper__container", "container")}>
      <main className="main">
      <Routes>
          <Route path="/" element={<ListMain />}>
            <Route path="lists/:listId" element={<List />}></Route>
          </Route>
          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;