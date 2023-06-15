import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import Table from "../../components/UI/Table/Table";
import { BANNERS_MOCK } from "../../mock/banners.mock";
import { IBanner } from "../../shared/interfaces/IBanner";
import { IShapeofBanners } from "../../shared/interfaces/IShapeOfBanners";
import { shapeOfBanners } from "../../shared/shape/shape-of-banners";
import { RANDOM } from "../../shared/utils/random-id";
import { transformData } from "../../shared/utils/transform-data";
import { TtableData } from "../../TablePage/ITablePageProps";
import { IFormValues } from "../Protocols/ActionProtocol/IActionProtocolProps";

import ActionBanner from "./ActionBanner/ActionBanner";

import styles from "./Banners.module.css";

const Banners: FC = () => {
  const [banners, setBanners] = useState<{ data: IBanner[] }>(BANNERS_MOCK);
  const { head, body } = transformData<IBanner, IShapeofBanners>(
    banners,
    shapeOfBanners
  );
  const [tableBody, setTableBody] = useState<TtableData>(body);
  const [formData, setFormData] = useState<IFormValues>({});
  const [bannerImage, setBannerImage] = useState<string>("");
  const [currentBanner, setCurrentBanner] = useState<Partial<IBanner>>({});
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setTableBody(body);
  }, [banners]);

  const clearBehaviour = (): void => {
    setCurrentBanner({});
    setBannerImage("");
    setFormData({});
  };

  const addNewBanner = (): void => {
    clearBehaviour();

    setEditMode(false);
    setShowModal(true);
  };

  const handleRemoveBanner = (id: string): void => {
    const updatedBanners = {
      data: banners.data.filter((item) => item.name !== id),
    };
    setBanners(updatedBanners);
    setShowModal(false);
  };

  const handleSaveBanner = (): void => {
    if (editMode) {
      const updatedBanner = banners.data.find(
        (banner) => banner.id === currentBanner.id
      );
      if (updatedBanner) {
        updatedBanner.description = formData.description;
        updatedBanner.name = formData.title;
      }
    } else {
      const newBanner = {
        id: RANDOM.id,
        name: formData.title,
        description: formData.description,
        image: "",
        availableFor: "SPECIALIST",
      };
      banners.data.push(newBanner);
    }
    setBanners({ ...banners });
    setShowModal(false);
  };

  const handleEditBanner = (id: string): void => {
    const bannerToEdit = banners.data.find((item) => item.name === id);
    if (bannerToEdit) {
      const newFormData = {
        title: bannerToEdit?.name,
        description: bannerToEdit?.description,
      };
      setFormData(newFormData);
      setShowModal(true);
      setBannerImage(bannerToEdit?.image as string);
      setCurrentBanner(bannerToEdit);
      setEditMode(true);
    }
  };

  const handleRemoveImage = (): void => {
    const bannerToRemoveImg = banners.data.find(
      (banner) => banner.name === currentBanner.name
    );
    if (bannerToRemoveImg) {
      bannerToRemoveImg.image = "";
    }
    setBannerImage("");
  };

  return (
    <>
      <div className={styles.wrap}>
        <Button onClick={addNewBanner}>Добавить баннер</Button>
        <Table
          heading={head}
          tableData={tableBody}
          idName={"name"}
          canBeDeleted={true}
          canBeEdit={true}
          onRemove={handleRemoveBanner}
          onEdit={handleEditBanner}
          onTrClick={handleEditBanner}
          emptyText="Здесь пока нет банеров"
          tdWidths={["90%", "10%"]}
        />
      </div>
      {showModal &&
        createPortal(
          <Modal
            active={showModal}
            setActive={() => setShowModal(false)}
            align="left"
          >
            <ActionBanner
              formData={formData}
              onSetFormValue={setFormData}
              onConfirm={handleSaveBanner}
              onRemove={() => handleRemoveBanner(currentBanner.name as string)}
              image={bannerImage}
              onRemoveImage={handleRemoveImage}
            />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default Banners;
