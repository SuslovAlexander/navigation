import { FC, useState } from "react";

import CitiesHead from "../../components/PageHeads/CitiesHead/CitiesHead";
import Button from "../../components/UI/Button/Button";
import Table from "../../components/UI/Table/Table";
import { transformData } from "../../helpers/transform-data";
import { BANNERS_MOCK } from "../../mock/banners.mock";
import { shapeOfBanners } from "../../shared/shape/shape-of-banners";

import styles from "./Banners.module.css";

const Banners: FC = () => {
  const { head, body } = transformData<any, any, any>(
    BANNERS_MOCK,
    shapeOfBanners
  );

  const [tableBody, setTableBody] = useState<any>(body);

  const addNewCity = (): void => {
    //open Modal
  };

  const removeBanner = (id: string): void => {
    const updatedCities = tableBody.filter((city: any) => city.name !== id);
    setTableBody(updatedCities);
  };

  return (
    <div className={styles.wrap}>
      <Button onClick={addNewCity}>Добавить баннер</Button>
      <Table
        selectedItems={tableBody}
        heading={head}
        tableData={tableBody}
        idName={"name"}
        hasCheckbox={false}
        canBeDeleted={true}
        canBeEdit={true}
        onRemove={removeBanner}
        emptyText="Здесь пока нет банеров"
      />
    </div>
  );
};

export default Banners;
