import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import Modal from "../../components/UI/Modal/Modal";
import Table from "../../components/UI/Table/Table";
import { ORDERS } from "../../mock/orders.mock";
import { IOrder } from "../../shared/interfaces/IOrder";
import { TtableData } from "../../TablePage/ITablePageProps";
import { IFormValues } from "../Protocols/ActionProtocol/IActionProtocolProps";

import ActionOrder from "./ActionOrder/ActionOrder";
import { tableHead } from "./consts/tableHead";
import OrdersHead from "./OrdersHead/OrdersHead";
import { processOrders } from "./utils/process-orders";

import styles from "./Orders.module.css";

const Orders: FC = () => {
  const [orders, setOrders] = useState<{ data: IOrder[] }>(ORDERS);
  const [tableBody, setTableBody] = useState<TtableData>([]);
  const [formData, setFormData] = useState<IFormValues>({});
  const [currentSlice, setCurrentSlice] = useState<TtableData>(tableBody);
  const [showModal, setShowModal] = useState<boolean>(false);

  const body = processOrders(orders);
  const total = useRef<number>(0);
  const standartBody = useRef(body);

  useEffect(() => {
    setTableBody(body);
  }, [orders]);

  const handleAction = (val: string): void => {
    setShowModal(true);
    const orderToActive = orders.data.find(
      (orderItem) => orderItem.order_number === val
    );
    if (!orderToActive) {
      return;
    }
    const data = {
      date: orderToActive?.date,
      delivery_type: orderToActive.delivery_type,
      order_number: orderToActive?.order_number,
      city: orderToActive?.warehouse.city,
      user: orderToActive?.user.name,
    };

    setFormData(data);
    total.current = orderToActive?.total;
  };

  const handleSearch = (str: string): void => {
    const updatedBody = standartBody.current.filter(
      (item) => item.user && item.user.toLowerCase().includes(str.toLowerCase())
    );
    setTableBody(updatedBody);
  };

  const handleEditOrder = (): void => {
    const orderToEdit = orders.data.find(
      (item) => item.order_number === formData.order_number
    );
    if (orderToEdit) {
      orderToEdit.date = formData.date;
      orderToEdit.delivery_type = formData.delivery_type;
      orderToEdit.order_number = formData.order_number;
      orderToEdit.warehouse.city = formData.city;
      orderToEdit.user = { ...orderToEdit?.user, name: formData.user };
    }
    setOrders({ ...orders });
    setShowModal(false);
  };

  const handleCancelEditOrder = (): void => {
    setShowModal(false);
  };

  return (
    <div className={styles.wrap}>
      <OrdersHead
        tableData={tableBody}
        setCurrentSlice={setCurrentSlice}
        onSearch={handleSearch}
        onResetSearch={() => handleSearch("")}
      />
      <Table
        idName={"order_number"}
        emptyText="Здесь пока нет заказов"
        heading={tableHead}
        selectedItems={currentSlice}
        tableData={currentSlice}
        onTrClick={handleAction}
        tdWidths={["16%", "16%", "16%", "16%", "16%", "16%"]}
      />
      {showModal &&
        createPortal(
          <Modal
            active={showModal}
            setActive={() => setShowModal(false)}
            align="left"
          >
            <ActionOrder
              total={total.current}
              formData={formData}
              onSetFormValues={setFormData}
              onConfirm={handleEditOrder}
              onCancel={handleCancelEditOrder}
            />
          </Modal>,
          document.body
        )}
    </div>
  );
};

export default Orders;
