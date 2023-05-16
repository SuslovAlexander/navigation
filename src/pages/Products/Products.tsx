import { FC } from "react";

import { GOODS_MOCK } from "../../mock/goods.mock";
import TablePage from "../../TablePage/TablePage";

const Products: FC = () => {
  return <TablePage data={GOODS_MOCK} />;
};

export default Products;
