import { FC } from "react";

import { ReactComponent as Image } from "../../../../public/assets/images/no-image.svg";
import RemoveButton from "../../../UI/RemoveButton/RemoveButton";

import { IImageBlockProps } from "./IImageBlockProps";

import styles from "./ImageBlock.module.css";
const ImageBlock: FC<IImageBlockProps> = ({ url }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles["image-block"]}>
        <div className={styles.image}>
          <Image />
        </div>
        <p className={styles.url}>{url}</p>
      </div>
      <div className={styles.remove}>
        <RemoveButton />
      </div>
    </div>
  );
};

export default ImageBlock;
