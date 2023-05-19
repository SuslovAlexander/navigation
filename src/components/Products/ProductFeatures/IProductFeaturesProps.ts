import { IFeature } from "../../../shared/types/IFeature";

export interface IProductFeatures {
  title?: string;
  maxFeatures: number;
  features: IFeature[];
}
