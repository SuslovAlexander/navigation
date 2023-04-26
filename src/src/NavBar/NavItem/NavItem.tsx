import {FC} from "react";

import NavItemIcon from "../NavItemIcon/NavItemIcon";

import {INavItemProps} from "./INavItemProps";

import styles from './NavItem.module.css'

const NavItem: FC<INavItemProps> = ({item, onSelect}) => {
    const {id, text, selected, url} = item;
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