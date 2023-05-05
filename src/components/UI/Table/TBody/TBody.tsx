import { FC, useState } from "react";
import { createPortal } from "react-dom";

import EditSettings from "../../../../EditSettings/EditSettings";
import { RANDOM } from "../../../../helpers/random-id";
import Modal from "../../Modal/Modal";
import TableTr from "../TableTr/TableTr";

const TBody: FC<any> = ({
  tableBodyData,
  onSelect,
  selectedItems,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <tbody>
      {tableBodyData.map((row: any) => {
        return (
          <TableTr
            selectedItems={selectedItems}
            onSelect={onSelect}
            data={row}
            key={RANDOM.id}
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
