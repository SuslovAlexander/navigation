import { TBearValue } from "../../../shared/types/TBearValue";

export interface ISeminarsHeadProps {
  tableData: Record<string, any>[];
  setCurrentSlice: any;
  onSearch: TBearValue;
  onResetSearch: () => void;
  onSetActiveTab: TBearValue;
  onAddSeminar?: any;
  activeTab: string;
  hasBtn: boolean;
}
