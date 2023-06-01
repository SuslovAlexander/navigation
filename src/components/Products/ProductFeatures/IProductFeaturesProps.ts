import { IFeature } from "../../../shared/interfaces/IFeature";

export interface IProductFeatures {
  title?: string;
  maxFeatures: number;
  features: IFeature[];
}
