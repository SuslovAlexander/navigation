import { FC } from "react";

import { RANDOM } from "../../../helpers/random-id";
import Input from "../../UI/Input/Input";

import ImageBlock from "./ImageBlock/ImageBlock";
import { IImagesProps } from "./IImagesProps";

import styles from "./Images.module.css";

const Images: FC<IImagesProps> = ({ urlList }) => {
  return (
    <div className={styles.wrap}>
      {urlList.map((url) => (
        <ImageBlock url={url} key={RANDOM.id} />
      ))}
      <Input
        type="text"
        variant="link"
        placeholder="Вставьте ссылку на Google Drive"
      />
    </div>
  );
};

export default Images;
