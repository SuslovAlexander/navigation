import { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Dropdown from "./components/UI/Dropdown/Dropdown";
import MainNavigation from "./Navigation/MainNavigation";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import classes from "./App.module.css";

const App: FC = () => {
  const [isAuth, setIsAuth] = useState(true);

  const [selected, setSelected] = useState("");
  const options = ["Наличными курьеру", "Онлайн"];

  return (
    <div className={classes.container}>
      <Dropdown
        options={options}
        selected={selected}
        setSelected={setSelected}
      />
      <button onClick={() => setIsAuth(!isAuth)}>LogIn/LogOut</button>
      {isAuth && <MainNavigation />}
      {!isAuth && (
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/auth/login" index element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
