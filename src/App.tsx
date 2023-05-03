import { FC } from "react";

import MainNavigation from "./Navigation/MainNavigation";

import classes from "./App.module.css";

const App: FC = () => {
  return (
    <div className={classes.container}>
      <MainNavigation />
    </div>
  );
};

export default App;
