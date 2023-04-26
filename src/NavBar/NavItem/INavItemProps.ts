export interface INavItem {
  id: number;
  text: string;
  selected: boolean;
  url: JSX.Element;
  name: string;
}

export interface INavItemProps {
  item: INavItem;
  onSelect: (id: number) => void;
}

//id text selected name url
