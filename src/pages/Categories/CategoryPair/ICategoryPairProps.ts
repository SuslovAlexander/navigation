import { IHasInputs } from "../../../shared/interfaces/IHasInputs";
import { TBearValue } from "../../../shared/types/TBearValue";
import { TTextUi } from "../Category/ICategoryProps";
import { TEditParams } from "../EditCategoryItem/IEditCategoryProps";

export interface ICategoryPair<T> {
  categoryId?: string;
  categories?: T;
  handleOnEditCat: (val: TEditParams) => void;
  subCategoryId?: string;
  subcategories?: any;
  handleAddSubCategory?: TBearValue;
  handleRemoveFromSubCat?: TBearValue;
  handleClickSubCategory?: TBearValue;
  handleOnEditSubCat?: (val: TEditParams) => void;
  textUiLeft: TTextUi;
  textUiRight: TTextUi;
  hasInputs: IHasInputs;
  handleAddCategory?: TBearValue;
  handleClickCategory?: TBearValue;
  handleRemoveFromCat?: TBearValue;
  onBtnClick?: TBearValue;
}
