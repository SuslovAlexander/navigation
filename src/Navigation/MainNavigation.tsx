import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../Routes/Routes";
import { LIST_ITEMS } from "../shared/constants/list-items";

import SideNavigation from "./NavBar/SideNavigation/SideNavigation";

import styles from "./MainNavigation.module.css";

const MainNavigation: FC = () => {
  return (
    <section className={styles.app}>
      <SideNavigation listItems={LIST_ITEMS} />
      <div className={styles.content}>
        <Routes>
          {ROUTES.map((route) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            );
          })}
        </Routes>
      </div>
    </section>
  );
};

export default MainNavigation;
