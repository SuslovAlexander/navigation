import { FC, useState } from "react";

import NavItem from "../NavItem/NavItem";

import { ISideNavigationProps } from "./ISideNavigationProps";

const SideNavigation: FC<ISideNavigationProps> = ({ listItems }) => {
  return (
    <ul>
      {listItems.map((item) => {
        return <NavItem item={item} key={item.name} />;
      })}
    </ul>
  );
};

export default SideNavigation;
