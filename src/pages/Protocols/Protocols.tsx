import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Modal from "../../components/UI/Modal/Modal";
import { RANDOM } from "../../helpers/random-id";
import { BRANDS } from "../../mock/brands.mock";
import { PROTOL_CATEGORY } from "../../mock/protocol_category.mock";
import { PROTOCOLS } from "../../mock/protocols.mock";
import {
  PROTOTOCOL_TEXT,
  SUBPROTOCOL_TEXT,
} from "../../shared/constants/protocol-text-ui";
import CategoryPair from "../Categories/CategoryPair/CategoryPair";

import AddProtocol from "./AddProtocol/AddProtocol";

const Protocols: FC = () => {
  const [categoryId, setCategoryId] = useState<string>();
  const [subCategoryId, setSubCategoryId] = useState<string>();
  const [categories, setCategories] = useState<any>();
  const [subcategories, setSubcategories] = useState<any>();

  const [showModal, setShowModal] = useState<boolean>(false);

  const SUB_CATEGORY = PROTOCOLS.map((protocol) => {
    const res = {
      protocol_category: {
        id: protocol.protocol_category.id,
      },
      name: protocol.name,
      id: protocol.id,
    };
    return res;
  });

  const handleClickCategory = (id: string): void => {
    if (id) setCategoryId(id);
  };

  const handleClickSubCategory = (id: string): void => {
    if (id) setSubCategoryId(id);
  };

  useEffect(() => {
    const showSubCat = SUB_CATEGORY.filter(
      (sub: any) => sub.protocol_category.id === categoryId
    );

    if (showSubCat) {
      setSubcategories(showSubCat);
    }
  }, [categoryId]);

  useEffect(() => {
    setCategories(PROTOL_CATEGORY);
  }, []);

  const handleRemoveFromCat = (id: string): void => {
    const updCategories = categories.filter(
      (category: any) => category.id !== id
    );
    setCategories(updCategories);
    setCategoryId("");
  };

  const handleRemoveFromSubCat = (id: string): void => {
    const updCategories = subcategories.filter(
      (category: any) => category.id !== id
    );
    setSubcategories(updCategories);
    setSubCategoryId("");
  };

  const createCategory = (value: string): any => {
    const newCategory: any = {
      id: RANDOM.id,
      name: value,
    };
    return newCategory;
  };

  const handleAddCategory = (val: string): void => {
    if (val.trim() === "") return;
    const categoryToAdd = createCategory(val);
    setCategories([categoryToAdd, ...categories]);
  };

  const handleAddSubCategory = (val: string): void => {
    if (val.trim() === "") return;
    const categoryToAdd = createCategory(val);
    setSubcategories([categoryToAdd, ...subcategories]);
  };
  const handleOnEditCat = (val: any): void => {
    if (val.id.trim() === "") return;
    const hasInCategories = categories.find((item: any) => item.id === val.id);
    if (hasInCategories) {
      hasInCategories.name = val.name;
    }
  };

  const handleOnEditSubCat = (val: any): void => {
    if (val.id.trim() === "") return;
    const hasInCategories = subcategories.find(
      (item: any) => item.id === val.id
    );
    if (hasInCategories) {
      hasInCategories.name = val.name;
    }
  };

  const prodFeatures = [
    {
      disabled: false,
      showName: "Название*",
      type: "input",
      value: PROTOL_CATEGORY.find((item) => item.id === categoryId)?.name,
    },
    {
      disabled: false,
      showName: "Бренд*",
      type: "dropdown",
      value: [{ name: "Выберите бренд" }, ...BRANDS.data],
    },
    {
      disabled: false,
      showName: "Описание*",
      type: "textarea",
      value: "",
      placeholder: "Опишите товар",
    },
    {
      disabled: true,
      showName: "Категория",
      type: "input",
      value: PROTOL_CATEGORY.find((item) => item.id === categoryId)?.name,
    },
  ];

  return (
    <>
      <CategoryPair
        categories={categories}
        categoryId={categoryId}
        handleAddCategory={handleAddCategory}
        handleAddSubCategory={handleAddSubCategory}
        handleClickCategory={handleClickCategory}
        handleClickSubCategory={handleClickSubCategory}
        handleOnEditCat={handleOnEditCat}
        handleOnEditSubCat={handleOnEditSubCat}
        handleRemoveFromCat={handleRemoveFromCat}
        handleRemoveFromSubCat={handleRemoveFromSubCat}
        subCategoryId={subCategoryId}
        subcategories={subcategories}
        textUiLeft={PROTOTOCOL_TEXT}
        textUiRight={SUBPROTOCOL_TEXT}
        hasInputs={{ first: true, second: false }}
        onBtnClick={() => setShowModal(true)}
      />

      {showModal &&
        createPortal(
          <Modal
            active={showModal}
            setActive={() => setShowModal(false)}
            align="left"
          >
            <AddProtocol
              items={prodFeatures}
              onAddProtocol={(val: any) => console.log(val)}
            />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default Protocols;
