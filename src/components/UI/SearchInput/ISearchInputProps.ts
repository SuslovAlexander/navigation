import { TBearValue } from "../../../shared/types/TBearValue";

export interface ISearchInputProps {
  value: string;
  onChange: TBearValue;
  handleMarkClick?: () => void;
  handleSearch?: TBearValue;
  placeholder?: string;
  variant?: "cross" | "mark";
}
