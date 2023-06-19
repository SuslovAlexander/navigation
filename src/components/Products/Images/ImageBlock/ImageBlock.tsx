import { FC } from "react";

import { ReactComponent as Image } from "../../../../public/assets/images/no-image.svg";
import { ReactComponent as Trash } from "../../../../public/assets/images/trash.svg";
import ActionBtn from "../../../UI/ActionBtn/ActionBtn";

import { IImageBlockProps } from "./IImageBlockProps";

import styles from "./ImageBlock.module.css";
const ImageBlock: FC<IImageBlockProps> = ({ url, onClick }) => {
  const handleClick = (): void => {
    if (onClick) {
      onClick(url);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles["image-block"]}>
        <div className={styles.image}>
          {url && <img src={url} width={80} height={80} />}
          {!url && <Image />}
        </div>
        <p className={styles.url}>{url}</p>
      </div>
      <div className={styles.remove} onClick={handleClick}>
        <ActionBtn>
          <Trash />
        </ActionBtn>
      </div>
    </div>
  );
};

export default ImageBlock;
