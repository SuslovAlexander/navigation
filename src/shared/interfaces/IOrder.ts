import { IUserInOrder } from "./IUserInOrder";

export interface IOrder {
  id: string;
  order_type: string;
  total: number;
  isViewedByAdmin: boolean;
  order_number: string;
  delivery_type: string;
  isPayed: boolean | string;
  user: IUserInOrder;
  warehouse: {
    city: string;
  };
  date: string;
}
