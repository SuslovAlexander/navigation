export interface ICheckBoxProps {
  checked: boolean | undefined;
  id: string;
  onSelect: (id: string) => void;
}
