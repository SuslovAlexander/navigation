import { TBearValue } from "../../../shared/types/TBearValue";

export interface ISearchInputProps {
  value: string;
  onChange: TBearValue;
  placeholder?: string;
  variant?: "cross" | "mark";
}
