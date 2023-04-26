export interface IItemEditprops {
  variant: Variant;
  placeholder?: string;
  title: string;
  values?: string[];
}

type Variant = "text" | "dropdown";

export enum VariantEnum {
  Text = "text",
  Dropdown = "dropdown",
}
