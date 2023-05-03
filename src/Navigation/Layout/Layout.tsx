import { FC } from "react";

import { LIST_ITEMS } from "../../shared/constants/list-items";
import SideNavigation from "../NavBar/SideNavigation/SideNavigation";

import { ILayoutProps } from "./ILayoutProps";

import styles from "./Layout.module.css";

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <section className={styles.app}>
      <SideNavigation listItems={LIST_ITEMS} />
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Layout;
