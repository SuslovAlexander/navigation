import { FC } from "react";

import { INavItemIcon } from "./INavItemIcon";

import styles from "./NavItemIcon.module.css";

const NavItemIcon: FC<INavItemIcon> = ({ color, pic }) => {
  return (
    <div className={`${color === "white" ? styles.white : styles.black}`}>
      {pic}
    </div>
  );
};
export default NavItemIcon;
