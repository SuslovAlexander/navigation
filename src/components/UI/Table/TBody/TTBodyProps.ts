import { ITableProps } from "../ITableProps";

export type TTBodyProps = Omit<
  ITableProps,
  "heading" | "onSelectAll" | "tdWidths" | "children"
>;
