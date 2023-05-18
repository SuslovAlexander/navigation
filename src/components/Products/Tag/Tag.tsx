import { FC } from "react";

import { ReactComponent as Remove } from "../../../public/assets/images/remove.svg";

import { ITag } from "./ITagProps";

import styles from "./Tag.module.css";

const Tag: FC<ITag> = ({ name, onRemove }) => {
  return (
    <div className={styles.wrap}>
      <div>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.remove} onClick={onRemove}>
        <Remove />
      </div>
    </div>
  );
};

export default Tag;
