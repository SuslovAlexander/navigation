import { FC, useEffect, useState } from "react";

import { RANDOM } from "../../../helpers/random-id";
import { TTag } from "../../../shared/types/TTag";
import Tag from "../Tag/Tag";

import { ITagsBlock } from "./ITagsBlockprops";

import styles from "./TagsBlock.module.css";

const ProductTags: FC<ITagsBlock> = ({ title, maxTags, tags }) => {
  const [isEditable, setIsEditable] = useState(true);
  const [insideTags, setInsideTags] = useState<any>();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInsideTags(tags);
  }, []);

  const addNewTag = (): void => {
    const newTag = { name: inputValue, id: RANDOM.id };
    setInsideTags([...insideTags, newTag]);
    setIsEditable(false);
    setInputValue("");
  };

  const handleInputKeyDown:
    | React.KeyboardEventHandler<HTMLSpanElement>
    | undefined = (e) => {
    if (e.code === "Enter") addNewTag();
  };

  const handleEditable = (): void => {
    setIsEditable(true);
  };

  return (
    <div className={styles.wrap} onClick={handleEditable}>
      <p className={styles.heading}>{title}</p>
      <div className={styles.content}>
        {insideTags?.map((tag: TTag) => (
          <Tag name={tag.name} key={tag.id} />
        ))}
        <input
          className={styles.input}
          contentEditable={isEditable}
          onKeyDown={handleInputKeyDown}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue}
      </div>
      <p className={styles.note}>{`Максимум ${maxTags} тэгов`}</p>
    </div>
  );
};

export default ProductTags;
