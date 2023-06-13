import Input from "../../../components/UI/Input/Input";

export const CONFIG = [
  {
    id: "10",
    title: "Заголовок",
    component: Input,
    field: "title",
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Введите название",
    },
  },
  {
    id: "11",
    title: "Краткое описание",
    component: Input,
    field: "description",
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Опишите протокол",
    },
  },
  {
    id: "12",
    title: "Процент скидки",
    component: Input,
    field: "description",
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Опишите протокол",
    },
  },
];
