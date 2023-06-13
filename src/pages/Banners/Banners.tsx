import { FC, useState } from "react";
import { createPortal } from "react-dom";

import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import Table from "../../components/UI/Table/Table";
import { BANNERS_MOCK } from "../../mock/banners.mock";
import { IItem } from "../../shared/interfaces/IItem";
import { shapeOfBanners } from "../../shared/shape/shape-of-banners";
import { transformData } from "../../shared/utils/transform-data";

import ActionBanner from "./ActionBanner/ActionBanner";

import styles from "./Banners.module.css";

const Banners: FC = () => {
  const { head, body } = transformData<any, any>(BANNERS_MOCK, shapeOfBanners);

  const [tableBody, setTableBody] = useState<any>(body);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState<any>();

  const addNewCity = (): void => {
    setShowModal(true);
    const emptyData = {
      title: "activeCategory.name",
    };
    setFormData(emptyData);
  };

  const removeBanner = (id: string): void => {
    const updatedCities = tableBody.filter((city: IItem) => city.name !== id);
    setTableBody(updatedCities);
  };

  return (
    <>
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
          tdWidths={[]}
        />
      </div>
      {showModal &&
        createPortal(
          <Modal
            active={showModal}
            setActive={() => setShowModal(false)}
            align="left"
          >
            <ActionBanner formData={formData}/>
          </Modal>,
          document.body
        )}
    </>
  );
};

export default Banners;
