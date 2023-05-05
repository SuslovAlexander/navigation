import Brands from "../pages/Brands/Brands";
import Categories from "../pages/Categories/Categories";
import Cities from "../pages/Cities/Cities";
import Clients from "../pages/Clients/Clients";
import Login from "../pages/Login/Login";
import Orders from "../pages/Orders/Orders";
import Products from "../pages/Products/Products";
import Promocode from "../pages/Promocode/Promocode";
import Protocols from "../pages/Protocols/Protocols";
import Register from "../pages/Register/Register";
import Seminars from "../pages/Seminars/Seminars";

export const ROUTES = [
  { path: "products", element: <Products /> },
  { path: "clients", element: <Clients /> },
  { path: "categories", element: <Categories /> },
  { path: "cities", element: <Cities /> },
  { path: "brands", element: <Brands /> },
  { path: "protocols", element: <Protocols /> },
  { path: "orders", element: <Orders /> },
  { path: "banners", element: <Brands /> },
  { path: "seminars", element: <Seminars /> },
  { path: "promocode", element: <Promocode /> },
  /*   { path: "auth/register", element: <Register /> },
  { path: "auth/login", element: <Login /> }, */
];
