import { FC, useState } from "react";

import CitiesHead from "../../components/PageHeads/CitiesHead/CitiesHead";
import Table from "../../components/UI/Table/Table";
import { transformData } from "../../helpers/transform-data";
import { CITIES_MOCK } from "../../mock/cities.mock";
import { shapeOfCities } from "../../shared/shape/shape-of-cities";

import styles from "./Cities.module.css";

const Cities: FC = () => {
  const { head, body } = transformData<any, any, any>(
    CITIES_MOCK,
    shapeOfCities
  );

  const [tableBody, setTableBody] = useState<any>(body);

  const addNewCity = (city: any): void => {
    const cityToAdd = { name: city.name, address: city.address };
    setTableBody([...tableBody, cityToAdd]);
  };

  const removeCity = (id: string): void => {
    const updatedCities = tableBody.filter((city: any) => city.name !== id);
    setTableBody(updatedCities);
  };

  return (
    <div className={styles.wrap}>
      <CitiesHead onAddCity={addNewCity} />
      <Table
        selectedItems={tableBody}
        heading={head}
        tableData={tableBody}
        idName={"name"}
        hasCheckbox={false}
        canBeDeleted={true}
        onRemove={removeCity}
        emptyText="Здесь пока нет городов"
      />
    </div>
  );
};

export default Cities;
