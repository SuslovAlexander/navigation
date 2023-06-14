import Input from "../../../components/UI/Input/Input";

export const BANNER_CONFIG = [
  {
    id: "10",
    title: "Заголовок",
    component: Input,
    field: "title",
    fieldStyle: { width: "100%" },
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
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Опишите протокол",
    },
  },
];
