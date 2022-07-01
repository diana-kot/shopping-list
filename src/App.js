import React from "react";
import { Route, Routes } from "react-router-dom";
import cn from "classnames";

import MainLayout from "./layouts";
import List from "@components/List";
import ListMain from "./pages/ListMain";
import Recipes from "./pages/Recipes";
import FullRecipes from "./pages/FullRecipes";

function App() {
  return (
    <div className={cn("wrapper", "wrapper__container", "container")}>
      <main className="main">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<ListMain />}>
              <Route path="lists/:listId" element={<List />}></Route>
            </Route>
            <Route path="recipes" element={<Recipes />}></Route>
            <Route path="recipes/:recipId" element={<FullRecipes />}></Route>
            <Route path="*" element={<h2>404</h2>} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
