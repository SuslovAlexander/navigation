import { FC, useState } from "react";

import NavItem from "../NavItem/NavItem";

import { ISideNavigationProps } from "./ISideNavigationProps";

const SideNavigation: FC<ISideNavigationProps> = ({ listItems }) => {
  const [list, setList] = useState(listItems);
  const handleClick = (id: number): void => {
    const selectedElem = list.map((el) => {
      el.selected = false;
      return el;
    });
    const clickedItem = selectedElem.find((el) => el.id === id);
    if (clickedItem) {
      clickedItem.selected = !clickedItem.selected;
      setList(selectedElem);
    }
  };

  return (
    <ul>
      {list.map((item) => {
        return <NavItem item={item} onSelect={handleClick} key={item.name} />;
      })}
    </ul>
  );
};

export default SideNavigation;
