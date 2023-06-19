import { TBearValue } from "../../../shared/types/TBearValue";
import { ITag } from "../Tag/ITagProps";

export interface ITagsBlock {
  title?: string;
  maxTags: number;
  tags: ITag[];
  onRemoveTag: TBearValue;
  onAddTag: (tag: ITag) => void;
}
