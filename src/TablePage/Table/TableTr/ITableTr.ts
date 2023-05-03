import { ITableRowItem } from "../../../shared/interfaces/Itable-row-items";

export interface ITableTrProps {
  data: Record<string, any>;
  onTrClick: () => void;
}
