export interface IDropdownProps {
  disabled?: boolean;
  placeholder?: string;
  options: string[] | undefined;
  value: string;
  onChange: (option: string) => void;
}
