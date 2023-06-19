export interface ITag {
  name: string;
  onRemove?: () => void;
}

export interface IProdTag {
  id: string;
  name: string;
}
