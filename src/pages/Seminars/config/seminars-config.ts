import Images from "../../../components/Products/Images/Images";
import Dropdown from "../../../components/UI/Dropdown/Dropdown";
import Input from "../../../components/UI/Input/Input";
import Textarea from "../../../components/UI/Textarea/Textarea";

export const SEMINARS_CONFIG = [
  {
    id: "60",
    title: "Название*",
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
    id: "61",
    title: "Описание*",
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
    id: "62",
    title: "Спикер*",
    component: Input,
    field: "speaker",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Спикер",
    },
  },
  {
    id: "63",
    title: "Специальность спиикера*",
    component: Input,
    field: "speaker_speciality",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Специальность спикера",
    },
  },
  {
    id: "64",
    title: "Город*",
    component: Dropdown,
    field: "city",
    fieldStyle: { width: "100%" },
    inputProps: {
      disabled: false,
      placeholder: "Город",
    },
  },
  {
    id: "65",
    title: "Дата*",
    component: Input,
    field: "date",
    fieldStyle: { width: "49%" },
    inputProps: {
      type: "date",
      disabled: false,
      placeholder: "dd.mm.yyyy",
    },
  },
  /*   {
    id: "66",
    title: "Время*",
    component: Input,
    field: "percent",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "number",
      disabled: false,
      placeholder: "% скидки",
    },
  }, */
  {
    id: "67",
    title: "Фото",
    component: Images,
    field: "image",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "number",
      disabled: false,
      placeholder: "% скидки",
    },
  },
];
