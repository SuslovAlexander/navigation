import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Modal from "../../components/UI/Modal/Modal";
import { PROTOL_CATEGORIES } from "../../mock/protocol_categories.mock";
import { PROTOCOLS } from "../../mock/protocols.mock";
import {
  PROTOTOCOL_TEXT,
  SUBPROTOCOL_TEXT,
} from "../../shared/constants/protocol-text-ui";
import { IItem } from "../../shared/interfaces/IItem";
import { IProductProtol } from "../../shared/interfaces/IProductProtocol";
import { IProtocol } from "../../shared/interfaces/IProtocol";
import { TProtocolCategories } from "../../shared/interfaces/TProtocolCategories";
import { RANDOM } from "../../shared/utils/random-id";
import { getProtocolFormData } from "../../utils/get-protocol-from-data";
import CategoryPair from "../Categories/CategoryPair/CategoryPair";

import ActionProtocol from "./ActionProtocol/ActionProtocol";

const Protocols: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [categories, setCategories] =
    useState<TProtocolCategories>(PROTOL_CATEGORIES);
  const [activeCategory, setActiveCategory] = useState<IItem>();

  const [protocols, setProtocols] = useState<IProtocol[]>(PROTOCOLS);
  const [filteredProtocols, setFilteredProtocols] = useState<IProtocol[]>([]);
  const [protocolId, setProtocolId] = useState<string>();
  const [categoryId, setCategoryId] = useState<string>();

  const [formData, setFormData] = useState<any>();
  const [products, setProducts] = useState<IProductProtol[]>([]);

  useEffect(() => {
    const filtered = protocols.filter(
      (protocol) => protocol.protocol_category.id === categoryId
    );
    setFilteredProtocols(filtered);
    const clickedCategory = categories.find(
      (category) => category.id === categoryId
    );
    setActiveCategory(clickedCategory);
  }, [categoryId, protocolId, protocols, categories]);

  const handleCategoryClick = (id: string): void => {
    setCategoryId(id);
  };

  const handleAddCategory = (value: string): void => {
    if (value.trim() === "") return;
    const newCategory = { id: RANDOM.id, name: value };
    setCategories((prev) => [...prev, newCategory]);
  };

  const handleRemoveCategory = (id: string): void => {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setCategories(updatedCategories);
  };

  const handleRemoveProtocol = (id: string): void => {
    const updateProtocols = protocols.filter((protocol) => protocol.id !== id);
    setProtocols(updateProtocols);
  };

  const handleEditCategory = (data: IItem): void => {
    const targetCategory = categories.find(
      (category) => category.id === data.id
    );
    if (targetCategory) {
      targetCategory.name = data.name;
    }
  };

  const handleProtocolBtnClick = (): void => {
    if (!activeCategory) {
      return;
    }
    setShowModal(true);
    const emptyData = {
      category: activeCategory.name,
    };
    setFormData(emptyData);
    setProducts([]);
  };

  const handleProtocolClick = (id: string): void => {
    setProtocolId(id);
    setShowModal(true);
    const protocolData = protocols.find((item) => item.id === id);
    setFormData(getProtocolFormData(protocolData));
    const protocolProducts = protocolData?.products;
    if (protocolProducts) {
      setProducts(protocolProducts);
    }
  };

  const handleAddProtocol = (formProtocol: IProtocol): void => {
    const newProtocol: IProtocol = {
      brand: formProtocol.brand,
      id: RANDOM.id,
      description: formProtocol.description,
      isRetailAllowed: false,
      name: formProtocol.name,
      products: [],
      protocol_category: activeCategory as IItem,
    };
    setProtocols([...protocols, newProtocol]);
    setShowModal(false);
  };

  const handleEditProtocol = (formProtocol: IProtocol): void => {
    const obj = protocols.find((item) => item.id === protocolId);
    if (!obj) {
      return;
    }
    obj.name = formProtocol.name;
    obj.description = formProtocol.description;
    obj.brand = formProtocol.brand;
    setProtocols([...protocols]);
    setShowModal(false);
  };

    const handleRemoveProduct = (id: string): void => {
    for (let i = 0; i < protocols.length; i++) {
      const prods = protocols[i].products;
      for (let j = 0; j < prods.length; j++) {
        if (prods[j].id === id) {
          prods.splice(j, 1);
        }
      }
    }
    setProtocols([...protocols]);
  }; 


  return (
    <>
      <CategoryPair
        categoryId={activeCategory?.id}
        subCategoryId={protocolId}
        categories={categories}
        handleAddCategory={handleAddCategory}
        handleClickCategory={handleCategoryClick}
        handleOnEditCat={handleEditCategory}
        handleRemoveFromCat={handleRemoveCategory}
        textUiLeft={PROTOTOCOL_TEXT}
        subcategories={filteredProtocols}
        handleAddSubCategory={handleProtocolBtnClick}
        handleClickSubCategory={handleProtocolClick}
        handleOnEditSubCat={() => null}
        handleRemoveFromSubCat={handleRemoveProtocol}
        textUiRight={SUBPROTOCOL_TEXT}
        onBtnClick={handleProtocolBtnClick}
        hasInputs={{ first: true, second: false }}
        changeableSub={false}
      />
      {showModal &&
        createPortal(
          <Modal
            active={showModal}
            setActive={() => setShowModal(false)}
            align="left"
          >
            <ActionProtocol
              formData={formData}
              onAddProtocol={handleAddProtocol}
              onEditProtocol={handleEditProtocol}
              onRemoveProducts={handleRemoveProduct}
              products={products}
            />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default Protocols;
