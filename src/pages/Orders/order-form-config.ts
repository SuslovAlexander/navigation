import Dropdown from "../../components/UI/Dropdown/Dropdown";
import Input from "../../components/UI/Input/Input";
import Textarea from "../../components/UI/Textarea/Textarea";

export const ORDER_CONFIG = [
  {
    id: "20",
    title: "Заказчик",
    component: Input,
    field: "user",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Заказчик",
    },
  },
  {
    id: "21",
    title: "Номер заказа",
    component: Input,
    field: "order_number",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Номер заказа",
    },
  },
  {
    id: "22",
    title: "Дата оформления",
    component: Input,
    field: "date",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Дата оформления",
    },
  },
  {
    id: "23",
    title: "Способ оплаты",
    component: Dropdown,
    field: "typePay",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Способ оплаты",
    },
  },
  {
    id: "24",
    title: "Способ получения",
    component: Input,
    field: "delivery_type",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Способ получения",
    },
  },
  {
    id: "25",
    title: "Город",
    component: Input,
    field: "city",
    fieldStyle: { width: "49%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Город",
    },
  },
  {
    id: "26",
    title: "Улица",
    component: Input,
    field: "street",
    fieldStyle: { width: "49%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Улица",
    },
  },
  {
    id: "27",
    title: "Дом",
    component: Input,
    field: "house",
    fieldStyle: { width: "49%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Дом",
    },
  },
  {
    id: "28",
    title: "Квартира",
    component: Input,
    field: "flat",
    fieldStyle: { width: "49%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Квартира",
    },
  },
  {
    id: "29",
    title: "Дополнительная информация",
    component: Textarea,
    field: "info",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Дополнительная информация",
    },
  },
  {
    id: "30",
    title: "Дополнительная информация по оплате",
    component: Textarea,
    field: "infoPay",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Дополнительная информация по оплате",
    },
  },
];
