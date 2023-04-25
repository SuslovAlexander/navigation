import {FC} from "react";

import {INavItemIcon} from "./INavItemIcon";

import styles from './NavItemIcon.module.css'

const NavItemIcon: FC<INavItemIcon> = ({color, url}) => {
    return <img src={url} className={`${(color === "white") ? styles.white : styles.black}`}/>
}
export default NavItemIcon;

