export interface IUser {
  email: string;
  phone: string;
  name: string;
  lastName: string;
  firmName: string;
  role: string;
}
export interface ITablePageProps {
  data: IUser[];
}
