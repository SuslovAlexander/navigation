export interface IDropdownProps {
  options: string[];
  selected: string;
  setSelected: (option: string) => void;
}
