import {FC, useState} from 'react';

import NavItem from "../NavItem/NavItem";

import {ISideNavigationProps} from "./ISideNavigationProps";

import styles from './SideNavigation.module.css'


const SideNavigation: FC<ISideNavigationProps> = ({onSetContent, listItems}) => {
    const [list, setList] = useState(listItems);
    const handleClick = (id: number) => {
        const selectedElem = list.map(el => {
            el.selected = false;
            return el;
        });
        const clickedItem = selectedElem.find(el => el.id === id);
        if (clickedItem) {
            clickedItem.selected = !clickedItem.selected;
            setList(selectedElem);
            onSetContent(id)
        }
    }

    return (
        <div className={styles.navigation}>
            <ul>
                {list.map(item => {
                    return <NavItem id={item.id} text={item.text} selected={item.selected} name={item.name}
                                    url={item.url}
                                    onSelect={handleClick} key={Math.random().toString(16)}/>
                })}
            </ul>
        </div>
    )
}

export default SideNavigation;