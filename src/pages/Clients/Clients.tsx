import { FC } from "react";

import { transformData } from "../../helpers/transform-data";
import { USERS } from "../../mock/users.mock";
import { shapeOfClients } from "../../shared/shape/shape-of-clients";
import TablePage from "../../TablePage/TablePage";

const Clients: FC = () => {
  const { head, body } = transformData<any, any, any>(USERS, shapeOfClients);

  return (
    <TablePage
      tableBody={body}
      tableHeading={head}
      idName="email"
      hasCheckbox={false}
      onAction={() => true}
    />
  );
};

export default Clients;
