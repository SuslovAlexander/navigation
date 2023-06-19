import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { IProdTag, ITag } from "../../components/Products/Tag/ITagProps";
import Modal from "../../components/UI/Modal/Modal";
import Table from "../../components/UI/Table/Table";
import { GOODS_MOCK } from "../../mock/goods.mock";
import { PRODUCT_MODAL } from "../../mock/product-modal.mock";
import { IFeature } from "../../shared/interfaces/IFeature";
import { IGood } from "../../shared/interfaces/IGood";
import { IProductsShape } from "../../shared/interfaces/IShapeOfProducts";
import { productsShape } from "../../shared/shape/shape-of-products";
import { transformData } from "../../shared/utils/transform-data";
import SelectedAlert from "../../TablePage/SelectedAlert/SelectedAlert";

import ActionProducts from "./ActionProduct/ActionProducts";
import ProductsHead from "./ProductsHead/ProductsHead";

import styles from "./Products.module.css";

const { head, body } = transformData<IGood, IProductsShape>(
  GOODS_MOCK,
  productsShape
);

const Products: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const immutableBody = useRef(body).current;

  const [tableBody, setTableBody] = useState(body);
  const [currentSlice, setCurrentSlice] = useState(tableBody);

  const [activeProduct, setActiveProduct] = useState(PRODUCT_MODAL);

  const [selected, setSelected] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const [toggleSelectAll, setToggleSelectAll] = useState(true);

  const [formData, setFormData] = useState({
    nameFrom1C: activeProduct.nameFrom1C,
    name: activeProduct.name,
    codeFrom1C: activeProduct.codeFrom1C,
    description: activeProduct.description,
    price: activeProduct.price,
    images: "",
  });

  const handleSearch = (str: string): void => {
    const updatedBody = immutableBody.filter(
      (item) => item.name && item.name.toLowerCase().includes(str.toLowerCase())
    );
    setTableBody(updatedBody);
  };

  useEffect(() => {
    if (!selected.length) {
      setShowAlert(false);
    }
  }, [selected]);

  const handleDelete = (): void => {
    const updatedTableData = tableBody.filter(
      (item) => !selected.includes(item.codeFrom1C)
    );
    setSelected([]);
    setTableBody(updatedTableData);
    setShowAlert(false);
  };

  const handleSelect = (val: string): void => {
    let updatedSelected = [...selected];
    if (!updatedSelected.includes(val)) {
      updatedSelected.push(val);
    } else {
      updatedSelected = updatedSelected.filter((item) => item !== val);
    }
    setSelected(updatedSelected);
    setShowAlert(true);
  };

  const handleToggleSelectAll = (): void => {
    setShowAlert(!showAlert);
    setToggleSelectAll(!toggleSelectAll);
    setSelectAll(!selectAll);
    const updatedSelected = toggleSelectAll
      ? tableBody.map((item) => item.codeFrom1C)
      : [];
    setSelected(updatedSelected);
  };

  ///////////////////////////////////////////////////////////

  const handleRemoveImg = (img: string): void => {
    const updatedProduct = {
      ...activeProduct,
      images: activeProduct.images.filter((image) => image !== img),
    };
    setActiveProduct(updatedProduct);
  };

  const handleRemoveFeature = (id: string): void => {
    const updatedProduct = {
      ...activeProduct,
      characteristics: activeProduct.characteristics.filter(
        (characteristic) => characteristic.id !== id
      ),
    };
    setActiveProduct(updatedProduct);
  };

  const handleAddFeature = (feature: IFeature): void => {
    activeProduct.characteristics.push(feature);
    setActiveProduct({ ...activeProduct });
  };
  const handleRemoveTag = (id: string): void => {
    const updatedProduct = {
      ...activeProduct,
      tags: activeProduct.tags.filter((tag) => tag.id !== id),
    };
    setActiveProduct(updatedProduct);
  };
  const handleAddTag = (tag: IProdTag): void => {
    activeProduct.tags.push(tag);
    setActiveProduct({ ...activeProduct });
  };

  const handleAddImage = (): void => {
    activeProduct.images.push(formData.images);
    setActiveProduct({ ...activeProduct });
  };

  ////////////////////////////////////////////////////////////

  return (
    <div className={styles.wrap}>
      <ProductsHead
        tableData={tableBody}
        setCurrentSlice={setCurrentSlice}
        onSearch={handleSearch}
        onResetSearch={() => handleSearch("")}
      />
      <Table
        emptyText="Здесь покак нет продуктов"
        heading={head}
        tableData={currentSlice}
        idName={"codeFrom1C"}
        hasCheckbox={true}
        onSelect={handleSelect}
        onSelectAll={handleToggleSelectAll}
        selectedItems={selected}
        onTrClick={() => setShowModal(true)}
        tdWidths={["90%", "10%"]}
      />
      <div className={styles.popup}>
        <SelectedAlert
          onDeleteRows={handleDelete}
          selectedAmount={selected.length}
          isOpen={showAlert}
          onClose={() => setShowAlert(false)}
        />
      </div>
      {showModal &&
        createPortal(
          <Modal
            active={showModal}
            setActive={() => setShowModal(false)}
            align="left"
          >
            <ActionProducts
              formData={formData}
              onSetFormValue={setFormData}
              onSaveAndClose={() => null}
              onSave={() => null}
              images={activeProduct.images}
              features={activeProduct.characteristics}
              tags={activeProduct.tags}
              onRemoveImg={handleRemoveImg}
              onRemoveFeature={handleRemoveFeature}
              OnAddFeature={handleAddFeature}
              onAddImage={handleAddImage}
              onRemoveTag={handleRemoveTag}
              onAddTag={handleAddTag}
            />
          </Modal>,
          document.body
        )}
    </div>
  );
};

export default Products;
