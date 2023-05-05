export interface INavItem {
  text: string;
  selected: boolean;
  pic: JSX.Element;
  url: string;
  name: string;
}

export interface INavItemProps {
  item: INavItem;
}
