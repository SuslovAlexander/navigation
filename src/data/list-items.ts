export interface IListItem {
    id: number;
    text: string;
    selected: boolean;
    name: string;
    url: string;
}

export const LIST_ITEMS: IListItem[] = [
    {id: 1, text: "Продукты", selected: true, name: "products", url: "./products.svg"},
    {id: 2, text: "Пользователи", selected: false, name: "users", url: "./users.svg"},
    {id: 3, text: "Категории", selected: false, name: "categories", url: "./categories.svg"},
    {id: 4, text: "Города", selected: false, name: "cities", url: "./cities.svg"},
    {id: 5, text: "Бренды", selected: false, name: "brands", url: "./brands.svg"},
    {id: 6, text: "Протоколы", selected: false, name: "protocols", url: "./protocols.svg"},
    {id: 7, text: "Заказы", selected: false, name: "orders", url: "./orders.svg"},
    {id: 8, text: "Баннеры", selected: false, name: "banners", url: "./banners.svg"},
    {id: 9, text: "Семинары", selected: false, name: "seminars", url: "./seminars.svg"},
    {id: 10, text: "Промокоды", selected: false, name: "codes", url: "./codes.svg"},
]