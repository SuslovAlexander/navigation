import Images from "../../../components/Products/Images/Images";
import Dropdown from "../../../components/UI/Dropdown/Dropdown";
import Input from "../../../components/UI/Input/Input";
import Textarea from "../../../components/UI/Textarea/Textarea";

export const PRODUCTS_CONFIG = [
  {
    id: "50",
    title: "Название 1C",
    component: Input,
    field: "nameFrom1C",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: true,
      placeholder: "Введите название",
    },
  },
  {
    id: "51",
    title: "Название*",
    component: Input,
    field: "name",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Введите название",
    },
  },
  {
    id: "52",
    title: "Бренд*",
    component: Dropdown,
    field: "brand",
    fieldStyle: { width: "100%" },
    inputProps: {
      disabled: false,
      placeholder: "Выберите бренд",
    },
  },
  {
    id: "53",
    title: "Артикул",
    component: Input,
    field: "codeFrom1C",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: true,
      placeholder: "Артикул",
    },
  },
  {
    id: "54",
    title: "Описание*",
    component: Textarea,
    field: "description",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Артикул",
    },
  },
  {
    id: "55",
    title: "Изображения*",
    component: Images,
    field: "images",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "text",
      variant: "link",
      disabled: true,
      placeholder: "Артикул",
    },
  },
  {
    id: "56",
    title: "Цена",
    component: Input,
    field: "price",
    fieldStyle: { width: "100%" },
    inputProps: {
      type: "number",
      disabled: true,
      placeholder: "Цена",
    },
  },
  {
    id: "57",
    title: "Категория*",
    component: Dropdown,
    field: "catalog_product",
    fieldStyle: { width: "49%" },
    inputProps: {
      type: "text",
      disabled: false,
      placeholder: "Выберите категорию",
    },
  },
  {
    id: "58",
    title: "Подкатегория*",
    component: Dropdown,
    field: "sub_catalog_product",
    fieldStyle: { width: "49%" },
    inputProps: {
      type: "text",
      disabled: true,
      placeholder: "Выберите подкатегорию",
    },
  },
];
