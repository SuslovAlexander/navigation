import { FC, useState } from "react";

import CitiesHead from "../../components/PageHeads/CitiesHead/CitiesHead";
import Table from "../../components/UI/Table/Table";
import { CITIES_MOCK } from "../../mock/cities.mock";
import { ICitiesShape } from "../../shared/interfaces/ICitiesShape";
import { ICity } from "../../shared/interfaces/ICity";
import { ICityFull } from "../../shared/interfaces/ICityFull";
import { shapeOfCities } from "../../shared/shape/shape-of-cities";
import { transformData } from "../../shared/utils/transform-data";

import styles from "./Cities.module.css";

const Cities: FC = () => {
  const { head, body } = transformData<ICityFull, ICitiesShape>(
    CITIES_MOCK,
    shapeOfCities
  );

  const [tableBody, setTableBody] = useState<ICityFull[] | ICity[]>(body);

  const addNewCity = (city: ICity): void => {
    const cityToAdd = { name: city.name, address: city.address };
    setTableBody([...tableBody, cityToAdd]);
  };

  const removeCity = (id: string): void => {
    const updatedCities = tableBody.filter((city) => city.name !== id);
    setTableBody(updatedCities);
  };

  return (
    <div className={styles.wrap}>
      <CitiesHead onAddCity={addNewCity} />
      <Table
        idName={"name"}
        emptyText="Здесь пока нет городов"
        heading={head}
        selectedItems={tableBody}
        tableData={tableBody}
        onRemove={removeCity}
        hasCheckbox={false}
        canBeDeleted={true}
        tdWidths={["33%", "33%", "33%"]}
      />
    </div>
  );
};

export default Cities;
