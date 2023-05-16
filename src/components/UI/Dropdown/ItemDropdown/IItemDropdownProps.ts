export interface IItemDropdownProps {
  selected: string;
  option: string;
  setSelected: (option: string) => void;
  setIsActive: (val: boolean) => void;
}
