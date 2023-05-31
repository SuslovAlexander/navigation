import { FC, useState } from "react";
import { createPortal } from "react-dom";

import Modal from "../../components/UI/Modal/Modal";
import { transformData } from "../../helpers/transform-data";
import { ORDERS } from "../../mock/orders.mock";
import { shapeOfOrder } from "../../shared/shape/shape-of-order";
import TablePage from "../../TablePage/TablePage";
import AddProtocol from "../Protocols/AddProtocol/AddProtocol";

const Orders: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderid] = useState<string>("");

  const { head, body } = transformData<any, any, any>(ORDERS, shapeOfOrder);
  const bodyData = body.map((order) => {
    if (order.user)
      return {
        ...order,
        user: order.user.name,
        isPayed: order.isPayed ? "Да" : "Нет",
      };
  });

  const handleAction = (val: string): void => {
    setShowModal(true);
    setOrderid(val);
  };

  return (
    <>
      <TablePage
        tableBody={bodyData}
        tableHeading={head}
        idName="order_number"
        hasCheckbox={false}
        onAction={handleAction}
      /> 
      {showModal &&
        createPortal(
          <Modal
            active={showModal}
            setActive={() => setShowModal(false)}
            align="left"
          >
            <div style={{ background: "white", width: "100%" }}>{orderId}</div>
          </Modal>,
          document.body
        )}
    </>
  );
};

export default Orders;
