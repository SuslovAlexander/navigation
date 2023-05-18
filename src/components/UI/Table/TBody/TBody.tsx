import { FC, useState } from "react";
import { createPortal } from "react-dom";

import { RANDOM } from "../../../../helpers/random-id";
import EditProduct from "../../../Products/EditProduct/EditProduct";
import Modal from "../../Modal/Modal";
import TableTr from "../TableTr/TableTr";

const TBody: FC<any> = ({
  product,
  tableBodyData,
  onSelect,
  selectedItems,
  onTrClick,
  idName,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOnTrClick = (id: string): void => {
    //setShowModal(true);
    onTrClick(id);
  };

  return (
    <tbody>
      {tableBodyData.map((row: any) => {
        return (
          <TableTr
            idName={idName}
            selectedItems={selectedItems}
            onSelect={onSelect}
            data={row}
            key={RANDOM.id}
            onTrClick={(val) => handleOnTrClick(val)}
          />
        );
      })}
      {showModal &&
        createPortal(
          <Modal active={showModal} setActive={() => setShowModal(false)}>
            <EditProduct product={product} />
          </Modal>,
          document.body
        )}
    </tbody>
  );
};

export default TBody;
