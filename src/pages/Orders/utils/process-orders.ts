interface Order {
  user: string;
  isPayed: string;
  date: string;
  delivery_type: string;
  order_number: string;
  total: number;
  city: string;
}

export const processOrders = (obj: any): Order[] => {
  return obj.data.map((order: any) => ({
    user: order.user.name,
    order_number: order.order_number,
    delivery_type: order.delivery_type === "PICKUP" ? "Самовывоз" : "Доставка",
    date: order.date,
    total: order.total,
    isPayed: order.isPayed ? "Да" : "Нет",
  }));
};
