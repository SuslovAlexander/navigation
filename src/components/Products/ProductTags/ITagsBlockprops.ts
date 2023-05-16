export interface ITag {
  id: string;
  name: string;
}

export interface ITagsBlock {
  title?: string;
  maxTags: number;
  tags: any[];
}
