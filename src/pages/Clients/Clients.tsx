import { FC, useRef, useState } from "react";

import ClientsHead from "../../components/PageHeads/ClientsHead/ClientsHead";
import Table from "../../components/UI/Table/Table";
import { USERS } from "../../mock/users.mock";
import { IClientsShape } from "../../shared/interfaces/ICliensShape";
import { IUser } from "../../shared/interfaces/Iuser";
import { shapeOfClients } from "../../shared/shape/shape-of-clients";
import { transformData } from "../../shared/utils/transform-data";

import styles from "./Clients.module.css";

const Clients: FC = () => {
  const { head, body } = transformData<IUser, IClientsShape>(
    USERS,
    shapeOfClients
  );

  const immutableBody = useRef(body).current;

  const [tableBody, setTableBody] = useState(body);
  const [currentSlice, setCurrentSlice] = useState(tableBody);

  const handleSearch = (str: string): void => {
    const updatedBody = immutableBody.filter(
      (item) => item.name && item.name.toLowerCase().includes(str.toLowerCase())
    );
    setTableBody(updatedBody);
  };

  return (
    <div className={styles.wrap}>
      <ClientsHead
        tableData={tableBody}
        setCurrentSlice={setCurrentSlice}
        onSearch={handleSearch}
        onResetSearch={() => handleSearch("")}
      />
      <Table
        idName={"name"}
        emptyText="Здесь пока нет городов"
        heading={head}
        selectedItems={currentSlice}
        tableData={currentSlice}
        hasCheckbox={false}
        tdWidths={["33%", "33%", "33%"]}
      />
    </div>
  );
};

export default Clients;
