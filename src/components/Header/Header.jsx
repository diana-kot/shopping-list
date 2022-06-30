import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <nav className={styles.header}>
        <div className={styles.header__container}>
          <ul className={styles.header__container}>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#d84c00" : "white",
                })}
                to="/"
                className="brand-logo"
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#d84c00" : "white",
                })}
                to="recipes"
              >
                Рецепты
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

