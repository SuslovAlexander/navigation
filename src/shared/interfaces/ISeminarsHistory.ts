export interface ISeminarsHistory {
  id: string;
  name: string;
  description: string;
  date: string;
  image: string;
  mobileImage: string;
}

export type IFutureData = ISeminarsHistory[];

export interface ISeminarsHistory {
  data: IFutureData;
}
