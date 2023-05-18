import { FC } from "react";

import {
  leadDataToCorrect,
  leaveUsedValues,
} from "../../helpers/lead-data-to-correct";
import { RANDOM } from "../../helpers/random-id";
import { GOODS_MOCK } from "../../mock/goods.mock";
import { PRODUCT_MODAL } from "../../mock/product-modal.mock";
import { PROD_ADDITIVE } from "../../shared/shape/product-additive";
import TablePage from "../../TablePage/TablePage";

const usedValues = ["name", "codeFrom1C"] as any;
const heading = ["Название", "Артикул"];

const transformedUsers: any = GOODS_MOCK.data.map((item) => {
  let modified = {};
  modified = { ...item, id: RANDOM.id };
  return modified;
});

const res = transformedUsers.map((item: any) => {
  const resObj: any = {};
  for (let i = 0; i < usedValues.length; i++) {
    if (usedValues[i] in item) resObj[usedValues[i]] = item[usedValues[i]];
  }
  return resObj;
});

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

const usedData = leaveUsedValues(PRODUCT_MODAL, usedVals);
const correctProduct = leadDataToCorrect(usedData, PROD_ADDITIVE);
const prodFeatures = Object.values(correctProduct);

const Products: FC = () => {
  return (
    <TablePage
      tableBody={res}
      tableHeading={heading}
      features={prodFeatures}
      idName="codeFrom1C"
    />
  );
};

export default Products;
