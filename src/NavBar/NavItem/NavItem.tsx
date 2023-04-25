import {FC} from "react";

import NavItemIcon from "../NavItemIcon/NavItemIcon";

import {INavItemProps} from "./INavItemProps";

import styles from './NavItem.module.css'

const NavItem: FC<INavItemProps> = ({id, text, selected, url, onSelect}) => {
    const navItem = `${styles.item} ${selected ? styles.selected : ""}`;

    const handleClick = () => {
        onSelect(id)
    }

    return (
        <li className={navItem} onClick={handleClick}>
            <NavItemIcon color={selected ? "white" : "black"} url={url}/>
            {text}
        </li>
    )
}

export default NavItem;