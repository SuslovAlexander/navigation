import { IFeature } from "../../../shared/interfaces/IFeature";
import { TBearValue } from "../../../shared/types/TBearValue";

export interface IFeatureProps {
  data: IFeature;
  onRemoveFeature: TBearValue;
}
