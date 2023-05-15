import { FC } from "react";

import { RANDOM } from "../../../helpers/random-id";
import Tag from "../Tag/Tag";

import { ITagsBlock } from "./ITagsBlockprops";

import styles from "./TagsBlock.module.css";

const ProductTags: FC<ITagsBlock> = ({ title, maxTags, tags }) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.heading}>{title}</p>
      <div className={styles.content}>
        {tags.map((tag) => (
          <Tag name={tag} key={RANDOM.id} />
        ))}
      
      </div>
      <p className={styles.note}>{`Максимум ${maxTags} тэгов`}</p>
    </div>
  );
};

export default ProductTags;
