import { FC } from "react";

import { ReactComponent as Link } from "../../../public/assets/images/link.svg";
import Input from "../../UI/Input/Input";
import Note from "../../UI/Note/Note";

import ImageBlock from "./ImageBlock/ImageBlock";
import { IImagesProps } from "./IImagesProps";

import styles from "./Images.module.css";

const Images: FC<IImagesProps> = ({
  images,
  onRemoveImg,
  onAddImage,
  value,
  onChange,
}) => {
  const handleAddImage = (): void => {
    onAddImage();
    onChange("");
  };
  return (
    <div className={styles.wrap}>
      {images?.map((url, index) => (
        <ImageBlock url={url} key={index} onClick={onRemoveImg} />
      ))}
      <Input
        value={value}
        type="text"
        variant="link"
        placeholder="Вставьте ссылку на Google Drive"
        iconImg={<Link />}
        onAddImage={handleAddImage}
        onChange={onChange}
      />
      <Note>Максимум 5 изображений</Note>
      <Note>Размер фото 1000x1000 px PNG, JPG, JPEG</Note>
    </div>
  );
};

export default Images;
