export interface IBrandProps {
  url?: string;
  text: string;
  id: string;
  onEdit?: (id: string) => void;
  onRemove?: (id: string) => void;
}
