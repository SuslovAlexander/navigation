import { TBearValue } from "../../../shared/types/TBearValue";

export interface IImagesProps {
  images: string[];
  onRemoveImg: TBearValue;
  onAddImage: () => void;
  value: string;
  onChange: TBearValue;
}
