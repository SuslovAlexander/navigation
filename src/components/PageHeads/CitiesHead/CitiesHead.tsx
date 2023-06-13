import { FC, useState } from "react";

import { ICity } from "../../../shared/interfaces/ICity";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

import { ICitiesHeadProps } from "./ICitiesHeadProps";

import styles from "./CitiesHead.module.css";

const CitiesHead: FC<ICitiesHeadProps> = ({ onAddCity }) => {
  const [newCity, setNewCity] = useState<ICity>({ name: "", address: "" });

  const handleAddressChange = (address: string): void => {
    setNewCity({ ...newCity, address: address });
  };
  const handleCityChange = (name: string): void => {
    setNewCity({ ...newCity, name: name });
  };

  const cityDataIsValid = (): boolean => {
    if (!newCity.address.trim().length || !newCity.name.trim().length) {
      return false;
    } else {
      return true;
    }
  };

  const handleAddCity = (): void => {
    if (cityDataIsValid()) {
      onAddCity(newCity);
    }
    setNewCity({ name: "", address: "" });
  };

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (
    e
  ) => {
    if (e.code === "Enter") {
      handleAddCity();
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <div className={styles.action}>
          <Input
            value={newCity.name}
            type="text"
            placeholder="Ввведите название города"
            onChange={handleCityChange}
          />
        </div>
        <div className={styles.action} onKeyDown={handleInputKeyDown}>
          <Input
            value={newCity.address}
            type="text"
            placeholder="Ввведите адрес"
            onChange={handleAddressChange}
          />
        </div>
        <div className={styles.action}>
          <Button onClick={handleAddCity}>Добавить город</Button>
        </div>
      </div>
    </div>
  );
};

export default CitiesHead;
