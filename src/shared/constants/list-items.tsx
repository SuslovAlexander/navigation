import { ReactComponent as Banners } from "../../public/assets/images/banners.svg";
import { ReactComponent as Brands } from "../../public/assets/images/brands.svg";
import { ReactComponent as Categories } from "../../public/assets/images/categories.svg";
import { ReactComponent as Cities } from "../../public/assets/images/cities.svg";
import { ReactComponent as Codes } from "../../public/assets/images/codes.svg";
import { ReactComponent as Orders } from "../../public/assets/images/orders.svg";
import { ReactComponent as Products } from "../../public/assets/images/products.svg";
import { ReactComponent as Protocols } from "../../public/assets/images/protocols.svg";
import { ReactComponent as Seminars } from "../../public/assets/images/seminars.svg";
import { ReactComponent as Users } from "../../public/assets/images/users.svg";
import { IListItem } from "../interfaces/IListItem";

export const LIST_ITEMS: IListItem[] = [
  {
    id: 1,
    text: "Продукты",
    selected: true,
    name: "products",
    url: <Products />,
  },
  {
    id: 2,
    text: "Пользователи",
    selected: false,
    name: "users",
    url: <Users />,
  },
  {
    id: 3,
    text: "Категории",
    selected: false,
    name: "categories",
    url: <Categories />,
  },
  { id: 4, text: "Города", selected: false, name: "cities", url: <Cities /> },
  { id: 5, text: "Бренды", selected: false, name: "brands", url: <Brands /> },
  {
    id: 6,
    text: "Протоколы",
    selected: false,
    name: "protocols",
    url: <Protocols />,
  },
  { id: 7, text: "Заказы", selected: false, name: "orders", url: <Orders /> },
  {
    id: 8,
    text: "Баннеры",
    selected: false,
    name: "banners",
    url: <Banners />,
  },
  {
    id: 9,
    text: "Семинары",
    selected: false,
    name: "seminars",
    url: <Seminars />,
  },
  { id: 10, text: "Промокоды", selected: false, name: "codes", url: <Codes /> },
];
