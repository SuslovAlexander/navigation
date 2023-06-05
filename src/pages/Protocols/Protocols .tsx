import { FC, useState } from "react";
import { createPortal } from "react-dom";

import Modal from "../../components/UI/Modal/Modal";
import { PROTOL_CATEGORY } from "../../mock/protocol_category.mock";
import { PROTOCOLS } from "../../mock/protocols.mock";
import { ReactComponent as Arrow } from "../../public/assets/images/arrow-right.svg";
import {
  PROTOTOCOL_TEXT,
  SUBPROTOCOL_TEXT,
} from "../../shared/constants/protocol-text-ui";
import { RANDOM } from "../../shared/utils/random-id";
import { getProtocolFormData } from "../../utils/get-protocol-from-data";
import Category from "../Categories/Category/Category";
import Placeholder from "../Categories/Placeholder/Placeholder";

import AddProtocol from "./AddProtocol/ActionProtocol";

import styles from "./Protocol.module.css";

const Protocols: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [categories, setCategories] = useState<any>(PROTOL_CATEGORY);
  const [protocols, setProtocols] = useState<any>(PROTOCOLS);

  const [activeCategory, setActiveCategory] = useState<any>();

  const [filteredProtocols, setFilteredProtocols] = useState<any>();

  const [formData, setFormData] = useState<any>();

  const [currentProtocol, setCurrentProtocol] = useState<any>();
  const [protocolId, setProtocolId] = useState<any>();

  const handleCategoryClick = (id: string): void => {
    const filtered = protocols.filter(
      (protocol: any) => protocol.protocol_category.id === id
    );
    setFilteredProtocols(filtered);
    const clickedCategory = categories.find(
      (category: any) => category.id === id
    );
    setActiveCategory(clickedCategory);
  };

  const handleAddCategory = (value: string): void => {
    const newCategory = { id: RANDOM.id, name: value };
    setCategories((prev: any) => [...prev, newCategory]);
  };

  const handleRemoveCategory = (id: string): void => {
    const updatedCategories = categories.filter(
      (category: any) => category.id !== id
    );
    setCategories(updatedCategories);
  };

  const handleEditCategory = (data: any): void => {
    categories.find((category: any) => category.id === data.id).name =
      data.name;
  };

  const handleProtocolBtnClick = (): void => {
    setShowModal(true);
    const emptyData = {
      category: activeCategory.name,
    };
    setFormData(emptyData);
  };

  const handleProtocolClick = (id: string): void => {
    setProtocolId(id);

    setShowModal(true);
    const protocolData = protocols.find((item: any) => item.id === id);
    setFormData(getProtocolFormData(protocolData));
  };

  const handleAddProtocol = (formProtocol: any): void => {
    const newProtocol: any = {
      brand: formProtocol.brands,
      id: RANDOM.id,
      description: formProtocol.description,
      isRetailAllowed: false,
      name: formProtocol.name,
      products: [],
      protocol_category: activeCategory,
    };
    setProtocols([...protocols, newProtocol]);
    setShowModal(false);
  };

  const handleEditProtocol = (formProtocol: any): void => {
    const obj = {
      ...protocols.find((item: any) => item.id === protocolId),
      name: formProtocol.name,
      description: formProtocol.description,
      brand: formProtocol.brand,
    };
    setProtocols([...protocols, obj]);
    setShowModal(false);
  };

  return (
    <div className={styles.wrap}>
      <Category
        hasInput={true}
        items={categories}
        onHandleBlure={() => null}
        textUi={PROTOTOCOL_TEXT}
        onEdit={handleEditCategory}
        onRemove={handleRemoveCategory}
        onHandleClick={handleCategoryClick}
        onBtnClick={handleAddCategory}
      />
      <div className={styles.arrows}>
        <Arrow />
        <Arrow />
      </div>
      {!filteredProtocols?.length && <Placeholder text="Выберите категорию" />}
      {filteredProtocols?.length && (
        <Category
          hasInput={false}
          items={filteredProtocols}
          onHandleBlure={() => null}
          textUi={SUBPROTOCOL_TEXT}
          onEdit={() => null}
          onRemove={() => null}
          onHandleClick={handleProtocolClick}
          onBtnClick={handleProtocolBtnClick}
        />
      )}
      {showModal &&
        createPortal(
          <Modal
            active={showModal}
            setActive={() => setShowModal(false)}
            align="left"
          >
            <AddProtocol
              formData={formData}
              onAddProtocol={handleAddProtocol}
              onEditProtocol={handleEditProtocol}
              products={[]}
            />
          </Modal>,
          document.body
        )}
    </div>
  );
};

export default Protocols;
