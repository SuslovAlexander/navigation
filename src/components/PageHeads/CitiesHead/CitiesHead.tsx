import { FC, useState } from "react";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

import { ICitiesHeadProps } from "./ICitiesHeadProps";

import styles from "./CitiesHead.module.css";

const CitiesHead: FC<ICitiesHeadProps> = ({ onAddCity }) => {
  const [newCity, setNewCity] = useState({ name: "", address: "" });

  const handleAddressChange = (address: string): void => {
    setNewCity({ ...newCity, address: address });
  };
  const handleCityChange = (name: string): void => {
    setNewCity({ ...newCity, name: name });
  };

  const cityDataIsValid = (): boolean => {
    if (!newCity.address.trim().length) return false;
    if (!newCity.name.trim().length) return false;
    return true;
  };

  const handleAddCity = (): void => {
    if (cityDataIsValid()) onAddCity(newCity);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <div className={styles.action}>
          <Input
            type="text"
            placeholder="Ввведите название города"
            onInputChange={handleCityChange}
          />
        </div>
        <div className={styles.action}>
          <Input
            type="text"
            placeholder="Ввведите адрес"
            onInputChange={handleAddressChange}
          />
        </div>
        <div className={styles.action}>
          <Button onBtnClick={handleAddCity}>Добавить город</Button>
        </div>
      </div>
    </div>
  );
};

export default CitiesHead;
