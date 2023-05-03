export interface INavItem {
  id: number;
  text: string;
  selected: boolean;
  pic: JSX.Element;
  url: string;
  name: string;
}

export interface INavItemProps {
  item: INavItem;
  onSelect: (id: number) => void;
}

