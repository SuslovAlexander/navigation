import { FC, useState } from "react";
import { createPortal } from "react-dom";

import Modal from "../../components/UI/Modal/Modal";
import { GOODS_MOCK } from "../../mock/goods.mock";
import { PRODUCT_MODAL } from "../../mock/product-modal.mock";
import { PROD_ADDITIVE } from "../../shared/shape/product-additive";
import { productsShape } from "../../shared/shape/shape-of-products";
import { getFeatures } from "../../shared/utils/get-features";
import { transformData } from "../../shared/utils/transform-data";
import Editor from "../../TablePage/Editor/Editor";
import TablePage from "../../TablePage/TablePage";

const usedVals = [
  "nameFrom1C",
  "name",
  "brand",
  "codeFrom1C",
  "description",
  "images",
  "price",
  "catalog_product",
  "sub_catalog_product",
  "volume",
  "characteristics",
  "tags",
];

const prodFeatures = getFeatures(PRODUCT_MODAL, usedVals, PROD_ADDITIVE);

const { head, body } = transformData<any, any>(GOODS_MOCK, productsShape);

const Products: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <TablePage
        tableHeading={head}
        tableBody={body}
        idName="codeFrom1C"
        hasCheckbox={true}
        onAction={() => setShowModal(true)}
      />
      {showModal &&
        createPortal(
          <Modal
            active={showModal}
            setActive={() => setShowModal(false)}
            align="left"
          >
            <Editor items={prodFeatures} />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default Products;
