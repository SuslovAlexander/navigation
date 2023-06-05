import { FC, useState } from "react";

import MainNavigation from "./Navigation/MainNavigation";
import Routers from "./Routers/Routers";

import classes from "./App.module.css";

const App: FC = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className={classes.container}>
      <button onClick={() => setIsAuth(!isAuth)}>LogIn/LogOut</button>
      {isAuth && <MainNavigation />}
      {!isAuth && <Routers />}
    </div>
  );
};

export default App;
