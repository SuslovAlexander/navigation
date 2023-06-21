import Images from "../../../components/Products/Images/Images";
import Input from "../../../components/UI/Input/Input";
import Textarea from "../../../components/UI/Textarea/Textarea";

export const SEMINARS_HISTORY_CONFIG = [
  {
    id: "70",
    title: "Название",
    component: Input,
    field: "name",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Название",
    },
  },
  {
    id: "71",
    title: "Краткое описание",
    component: Textarea,
    field: "description",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Описание",
    },
  },
  {
    id: "72",
    title: "Дата*",
    component: Input,
    field: "date",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "date",
      disabled: false,
      placeholder: "dd.mm.yyyy",
    },
  },
  {
    id: "73",
    title: "Фото",
    component: Images,
    field: "image",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "number",
      disabled: false,
      placeholder: "",
    },
  },
];
