import {FC} from "react";

import {INavItemIcon} from "./INavItemIcon";

import styles from './NavItemIcon.module.css'

const NavItemIcon: FC<INavItemIcon> = ({color, url}) => {
    return (<div className={`${color === "white" ? styles.white : styles.black}`}>{url}</div>)
}
export default NavItemIcon;

