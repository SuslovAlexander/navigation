import { FC } from "react";

import { RANDOM } from "../../../helpers/random-id";

import ImageBlock from "./ImageBlock/ImageBlock";
import { IImagesProps } from "./IImagesProps";

import styles from "./Images.module.css";

const Images: FC<IImagesProps> = ({ urlList }) => {
  return (
    <div className={styles.wrap}>
      {urlList.map((url) => (
        <ImageBlock url={url} key={RANDOM.id} />
      ))}
    </div>
  );
};

export default Images;
