export type IData = ISeminar[];

export interface ICity {
  id: string;
  name: string;
  address: string;
}

export interface ISeminar {
  id: string;
  name: string;
  description: string;
  speaker: string;
  speaker_speciality: string;
  datetime: string;
  image: string;
  mobileImage: string;
  city: ICity;
}

export interface ISeminarsFuture {
  data: IData;
}
