import { FC } from "react";

import NavItem from "../NavItem/NavItem";

import { ISideNavigationProps } from "./ISideNavigationProps";

import styles from "./SideNavigation.module.css";

const SideNavigation: FC<ISideNavigationProps> = ({ listItems }) => {
  return (
    <ul className={styles.ul}>
      {listItems.map((item) => {
        return <NavItem item={item} key={item.name} />;
      })}
    </ul>
  );
};

export default SideNavigation;
