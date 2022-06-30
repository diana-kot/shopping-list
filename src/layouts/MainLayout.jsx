import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

import  Header from "@components/Header";

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
