import { TStringOrNull } from "./Iuser";

export interface IUserInOrder {
  id: string;
  name: string;
  lastName: TStringOrNull;
  secondName: TStringOrNull;
  firmName: TStringOrNull;
  role: string;
}
