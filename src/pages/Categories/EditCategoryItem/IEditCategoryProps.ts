import { TCategory } from "../../../shared/types/TCategory";

export type TEditParams = {
  id: string;
  name: string;
};

export interface IEditCategoryProps {
  data: TCategory;
  isActive?: boolean;
  onEdit?: (val: TEditParams) => void;
  onRemove?: (id: string) => void;
  onClick?: (id: string) => void;
}
