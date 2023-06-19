import { TtableData } from "../ITablePageProps";

export interface IPageActionsProps {
  tableData: TtableData;
  onSetSlice: (val: TtableData) => void;
}
