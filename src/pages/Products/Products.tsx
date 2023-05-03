import { FC } from "react";

import { TABLE_USER_MOCK } from "../../mock/table-user.mock";
import TablePage from "../../TablePage/TablePage";

const Products: FC = () => {
  return <TablePage data={TABLE_USER_MOCK} />;
};

export default Products;
