import { FC } from "react";

import { GOODS_MOCK } from "../../mock/goods.mock";
import { TABLE_USER_MOCK } from "../../mock/table-user.mock";
import TablePage from "../../TablePage/TablePage";

const Products: FC = () => {
  /* return <TablePage data={TABLE_USER_MOCK} />; */
  return <TablePage data={GOODS_MOCK} />;
};

export default Products;
