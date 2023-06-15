import Input from "../../../components/UI/Input/Input";

export const PROMOCODES_CONFIG = [
  {
    id: "40",
    title: "Заголовок*",
    component: Input,
    field: "name",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Заголовок",
    },
  },
  {
    id: "41",
    title: "Промокод*",
    component: Input,
    field: "promocode",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Промокод",
    },
  },
  {
    id: "42",
    title: "Процент скидки*",
    component: Input,
    field: "percent",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "number",
      disabled: false,
      placeholder: "% скидки",
    },
  },
];
