import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import Modal from "../../components/UI/Modal/Modal";
import Table from "../../components/UI/Table/Table";
import { ORDERS } from "../../mock/orders.mock";
import { shapeOfOrder } from "../../shared/shape/shape-of-order";
import { transformData } from "../../shared/utils/transform-data";

import ActionOrder from "./ActionOrder/ActionOrder";
import OrdersHead from "./OrdersHead/OrdersHead";

import styles from "./Orders.module.css";

const Orders: FC = () => {
  const [orders, setOrders] = useState(ORDERS);
  const [tableBody, setTableBody] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [currentSlice, setCurrentSlice] = useState(tableBody);
  const { head, body } = transformData<any, any>(orders, shapeOfOrder);

  const total = useRef<any>(null);

  useEffect(() => {
    const bodyData = body.map((order) => {
      if (order.user) {
        return {
          ...order,
          user: order.user.name,
          delivery_type:
            order.delivery_type === "PICKUP" ? "Самовывоз" : "Доставка",
          isPayed: order.isPayed ? "Да" : "Нет",
        };
      }
    });
    setTableBody(bodyData);
  }, [orders]);

  const handleAction = (val: string): void => {
    setShowModal(true);
    const orderToActive = orders.data.find(
      (orderItem: any) => orderItem.order_number === val
    );
    const data = {
      date: orderToActive?.date,
      delivery_type: orderToActive?.delivery_type,
      order_number: orderToActive?.order_number,
      city: orderToActive?.warehouse.city,
      user: orderToActive?.user.name,
    };
    setFormData(data);
    total.current = orderToActive?.total;
  };

  const handleSearch = (str: string): void => {
    const updatedBody = tableBody?.filter(
      (item: any) =>
        item.user && item.user.toLowerCase().includes(str.toLowerCase())
    );
    setTableBody(updatedBody);
  };

  const handleEditOrder = (): void => {
    const orderToEdit = orders.data.find(
      (item: any) => item.order_number === formData.order_number
    );
    if (orderToEdit) {
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
        heading={head}
        selectedItems={currentSlice}
        tableData={currentSlice}
        hasCheckbox={false}
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
            <div style={{ background: "white", width: "100%" }}>
              <ActionOrder
                total={total}
                formData={formData}
                onSetFormValues={setFormData}
                onConfirm={handleEditOrder}
                onCancel={handleCancelEditOrder}
              />
            </div>
          </Modal>,
          document.body
        )}
    </div>
  );
};

export default Orders;
