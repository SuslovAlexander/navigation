import { ITag } from "../Tag/ITagProps";

export interface ITagsBlock {
  title?: string;
  maxTags: number;
  tags: ITag[];
}
