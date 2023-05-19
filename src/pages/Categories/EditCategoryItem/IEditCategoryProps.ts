import { TCategory } from "../../../shared/types/TCategory";

export interface IEditCategoryProps {
  data: TCategory;
  isActive?: boolean;
  onEdit?: (id: string) => void;
  onRemove?: (id: string) => void;
  onClick?: (id: string) => void;
}
