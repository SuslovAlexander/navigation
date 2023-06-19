import { IFeature } from "../../../shared/interfaces/IFeature";
import { TBearValue } from "../../../shared/types/TBearValue";

export interface IProductFeatures {
  features: IFeature[];
  onRemoveFeature: TBearValue;
  onAddFeature: (feature: IFeature) => void;
}
