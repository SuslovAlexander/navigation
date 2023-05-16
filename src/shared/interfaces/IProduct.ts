export interface IProduct {
  id: string;
  name: string;
  nameFrom1C: string;
  codeFrom1C: string;
  price: number;
  volume?: string;
  isReady: boolean;
  isRetailAllowed: boolean;
  brand: IBrand;
  images: string[];
}

export interface IBrand {
  id: string;
  name: string;
  icon: string;
}
