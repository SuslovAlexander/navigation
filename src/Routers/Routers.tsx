import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Routers: FC = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/auth/login" index element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
