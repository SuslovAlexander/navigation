export interface IDropdownProps {
  placeholder?: string;
  options: string[] | undefined;
  value: string;
  onChange: (option: string) => void;
}
