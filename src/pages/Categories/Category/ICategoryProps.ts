import { TBearValue } from "../../../shared/types/TBearValue";
import { TEditParams } from "../EditCategoryItem/IEditCategoryProps";

export type TTextUi = {
  inputText: string;
  titleCatText: string;
  buttonCatText: string;
  emptyCatText: string;
};

export interface ICategoryProps {
  onHandleBlure?: TBearValue;
  onRemove?: (val: string) => void;
  onEdit?: (val: TEditParams) => void;
  onHandleClick?: any;
  items: any;
  itemId?: string;
  textUi: TTextUi;
  hasInput: boolean;
  onBtnClick?: any;
  changeable?: boolean;
}
