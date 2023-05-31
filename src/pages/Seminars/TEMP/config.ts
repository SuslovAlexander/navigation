import Dropdown from "../../../components/UI/Dropdown/Dropdown";
import Input from "../../../components/UI/Input/Input";
import Textarea from "../../../components/UI/Textarea/Textarea";

export const CONFIG = [
  {
    id: "1",
    title: "Название*",
    component: Input,
    field: "name",
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Введите название",
    },
  },
  {
    id: "2",
    title: "Бренд",
    component: Dropdown,
    field: "brands",
    inputProps: {
      placeholder: "Выберите бренд",
    },
  },
  {
    id: "3",
    title: "Описание*",
    component: Textarea,
    field: "description",
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Опишите протокол",
    },
  },
  {
    id: "4",
    title: "Категория",
    component: Input,
    field: "category",
    inputProps: {
      type: "text",
      disabled: true,
      placeholder: "",
    },
  },
];
