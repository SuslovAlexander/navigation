import { FC } from "react";
import { Link } from "react-router-dom";
import { matchPath, useLocation } from "react-router-dom";

import NavItemIcon from "../NavItemIcon/NavItemIcon";

import { INavItemProps } from "./INavItemProps";

import styles from "./NavItem.module.css";

const NavItem: FC<INavItemProps> = ({ item }) => {
  const { text, pic, url } = item;
  const { pathname } = useLocation();

  const selected = matchPath(url, pathname);

  const navItem = `${styles.item} ${selected ? styles.selected : ""}`;

  return (
    <li className={styles.li}>
      <Link to={url} className={navItem}>
        <NavItemIcon color={selected ? "white" : "black"} pic={pic} />
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
