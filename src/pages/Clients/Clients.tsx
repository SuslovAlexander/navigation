import { FC } from "react";

import { RANDOM } from "../../helpers/random-id";
import { USERS } from "../../mock/users.mock";
import TablePage from "../../TablePage/TablePage";

const Clients: FC = () => {
  const heading = ["ФИ", "Почта", "Телефон"];
  const body = ["name", "email", "phone"] as any;

  const transformedUsers: any = USERS.data.map((item) => {
    let modified = {};
    modified = { ...item, id: RANDOM.id };
    return modified;
  });

  const res = transformedUsers.map((item: any) => {
    const resObj: any = {};
    for (let i = 0; i < body.length; i++) {
      if (body[i] in item) resObj[body[i]] = item[body[i]];
    }
    return resObj;
  });

  return <TablePage tableBody={res} tableHeading={heading} idName="email" />;
};

export default Clients;
