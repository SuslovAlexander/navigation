import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Modal from "../../components/UI/Modal/Modal";
import { PROTOL_CATEGORY } from "../../mock/protocol_category.mock";
import { PROTOCOLS } from "../../mock/protocols.mock";
import {
  PROTOTOCOL_TEXT,
  SUBPROTOCOL_TEXT,
} from "../../shared/constants/protocol-text-ui";
import { IProtocol } from "../../shared/interfaces/IProtocol";
import { RANDOM } from "../../shared/utils/random-id";
import { getProtocolFormData } from "../../utils/get-protocol-from-data";
import CategoryPair from "../Categories/CategoryPair/CategoryPair";

import ActionProtocol from "./AddProtocol/ActionProtocol";

const Protocols: FC = () => {
  const [categoryId, setCategoryId] = useState<string>();
  const [subCategoryId, setSubCategoryId] = useState<string>();
  const [categories, setCategories] = useState<any>();
  const [subcategories, setSubcategories] = useState<any>();
  const [targetProtocol, setTargetProtocol] = useState<any>({});
  const [products, setProducts] = useState<any>([
    {
      id: "1234",
      name: "sdsdsd",
      isRetailAllowed: false,
      brand: { id: "98", name: "Superrr" },
      images: [],
    },
    {
      id: "1234",
      name: "sdsdsd",
      isRetailAllowed: false,
      brand: { id: "98", name: "Superrr" },
      images: [],
    },
  ]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [protocols, setProtocols] = useState<any>(PROTOCOLS);

  const [selectedCategory, setSelectedCategory] = useState<any>({});
  const categoryName = selectedCategory?.protocol_category?.name;
  const [dataToForm, setDataToForm] = useState<any>({});

  useEffect(() => {
    const protocol = protocols.find(
      (item: any) => item.protocol_category.id === categoryId
    );
    setTargetProtocol(protocol);
  }, [protocols]);

  const SUB_CATEGORY = protocols.map((protocol: any) => {
    const res = {
      protocol_category: {
        id: protocol?.protocol_category?.id,
      },
      name: protocol.name,
      id: protocol.id,
    };
    return res;
  });

  const handleClickCategory = (id: string): void => {
    if (id) {
      setCategoryId(id);
    }
  };

  const handleClickSubCategory = (id: string): void => {
    const temp = protocols.find((item: any) => item.id === id);
    const transformed = getProtocolFormData(temp);
    setDataToForm(transformed);
    setSubCategoryId(id);
    setShowModal(true);
  };

  useEffect(() => {
    const showSubCat = SUB_CATEGORY.filter(
      (sub: any) => sub.protocol_category.id === categoryId
    );

    if (showSubCat) {
      setSubcategories(showSubCat);
    }
  }, [categoryId, protocols]);

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
    if (val.trim() === "") {
      return;
    }
    const categoryToAdd = createCategory(val);
    setCategories([categoryToAdd, ...categories]);
  };

  const handleAddSubCategory = (val: string): void => {
    if (val.trim() === "") {
      return;
    }
    const categoryToAdd = createCategory(val);
    setSubcategories([categoryToAdd, ...subcategories]);
  };
  const handleOnEditCat = (val: any): void => {
    if (val.id.trim() === "") {
      return;
    }
    const hasInCategories = categories.find((item: any) => item.id === val.id);
    if (hasInCategories) {
      hasInCategories.name = val.name;
    }
  };

  const handleOnEditSubCat = (val: any): void => {
    if (val.id.trim() === "") {
      return;
    }
    const hasInCategories = subcategories.find(
      (item: any) => item.id === val.id
    );
    if (hasInCategories) {
      hasInCategories.name = val.name;
    }
  };

  useEffect(() => {
    const selected = protocols.find(
      (item: any) => item.protocol_category.id === categoryId
    );
    setSelectedCategory(selected);
  }, [categoryId]);

  const handleOpenModal = (): void => {
    setShowModal(true);
    setDataToForm({ category: categoryName });

  };

  const handleAddProtocol = (formProtocol: any): void => {
    const newProtocol: IProtocol = {
      brand: formProtocol.brands,
      id: RANDOM.id,
      description: formProtocol.description,
      isRetailAllowed: false,
      name: formProtocol.name,
      products: products,
      protocol_category: targetProtocol?.protocol_category,
    };
    setProtocols([...protocols, newProtocol]);
    setShowModal(false);
  };

  const handleEditProtocol = (formProtocol: any): void => {
    console.log(formProtocol);
    /* 
    let editable = protocols.find((item: any) => item.id === subCategoryId);

    const resObj = { ...editable, ...formProtocol };
    editable = resObj; */
    /*     console.log(resObj);
    console.log(
      protocols.find((item: any) => item.id === resObj.protocol_category.id)
    ); */
  };

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
        onBtnClick={handleOpenModal}
      />
      {showModal &&
        createPortal(
          <Modal
            active={showModal}
            setActive={() => setShowModal(false)}
            align="left"
          >
            <ActionProtocol
              formData={dataToForm}
              onAddProtocol={handleAddProtocol}
              onEditProtocol={handleEditProtocol}
              products={products}
            />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default Protocols;
