import { FC } from "react";

import { ReactComponent as Link } from "../../../public/assets/images/link.svg";
import Input from "../../UI/Input/Input";

import ImageBlock from "./ImageBlock/ImageBlock";
import { IImagesProps } from "./IImagesProps";

import styles from "./Images.module.css";

const Images: FC<IImagesProps> = ({ urlList }) => {
  return (
    <div className={styles.wrap}>
      {urlList.map((url, index) => (
        <ImageBlock url={url} key={index} />
      ))}
      <Input
        type="text"
        variant="link"
        placeholder="Вставьте ссылку на Google Drive"
        iconImg={<Link />}
      />
    </div>
  );
};

export default Images;
