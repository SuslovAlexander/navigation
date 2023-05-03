import { FC, useState } from "react";
import { createPortal } from "react-dom";

import EditSettings from "../../../EditSettings/EditSettings";
import Modal from "../../../Modal/Modal";
import TableTr from "../TableTr/TableTr";

const TBody: FC<any> = ({ tableBodyData }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <tbody>
      {tableBodyData.map((row: any) => {
        return (
          <TableTr
            data={row}
            key={row.id}
            onTrClick={() => setShowModal(true)}
          />
        );
      })}
      {showModal &&
        createPortal(
          <Modal active={showModal} setActive={() => setShowModal(false)}>
            <EditSettings />
          </Modal>,
          document.body
        )}
    </tbody>
  );
};

export default TBody;
