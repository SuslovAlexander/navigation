import { FC } from "react";

import {
  leadDataToCorrect,
  leaveUsedValues,
} from "../../helpers/lead-data-to-correct";
import { RANDOM } from "../../helpers/random-id";
import { PRODUCT_MODAL } from "../../mock/product-modal.mock";
import { USERS } from "../../mock/users.mock";
import { PROD_ADDITIVE } from "../../shared/shape/product-additive";
import TablePage from "../../TablePage/TablePage";

const Clients: FC = () => {
  const usedValues = ["name", "email", "phone"] as any;
  const heading = ["ФИ", "Почта", "Телефон"];

  const transformedUsers: any = USERS.data.map((item) => {
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

  return (
    <TablePage
      data={res}
      tableHeading={heading}
      used={usedValues}
    />
  );
};

export default Clients;
