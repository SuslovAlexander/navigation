import { TBearValue } from "../../../shared/types/TBearValue";

export interface IClientsHeadProps {
  tableData: Record<string, any>[];
  setCurrentSlice: any;
  onSearch: TBearValue;
  onResetSearch: () => void;
}
