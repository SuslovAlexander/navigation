import { TBearValue } from "../../../shared/types/TBearValue";

export interface IProductsHeadProps {
  tableData: Record<string, any>[];
  setCurrentSlice: any;
  onSearch: TBearValue;
  onResetSearch: () => void;
}
