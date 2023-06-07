export type TTextUi = {
  inputText: string;
  titleCatText: string;
  buttonCatText: string;
  emptyCatText: string;
};

export interface ICategoryProps {
  onHandleBlure: any;
  onRemove?: (val: string) => void;
  onEdit: any;
  onHandleClick?: any;
  items: any;
  itemId?: any;
  textUi: TTextUi;
  hasInput: any;
  onBtnClick?: any;
  changeable?: boolean;
}
