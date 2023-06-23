import { TBearValue } from "../../../shared/types/TBearValue";

export interface IImagesProps {
  images: string[];
  onRemoveImg: TBearValue;
  onAddImage: (val: string) => void;
  value: string;
  onChange: TBearValue;
}
