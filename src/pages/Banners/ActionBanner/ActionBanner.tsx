import { FC } from "react";

import TitledContent from "../../../components/Products/EditProduct/TitltInputPair/TitledContent";
import ImageBlock from "../../../components/Products/Images/ImageBlock/ImageBlock";
import Button from "../../../components/UI/Button/Button";
import Form from "../../../components/UI/Form/Field/Form";
import { BANNER_CONFIG } from "../configs/banner-config";

import { IActionBannerProps } from "./ActionBannerProps";

import styles from "./ActionBanner.module.css";

const ActionBanner: FC<IActionBannerProps> = ({
  image,
  formData,
  onSetFormValue,
  onConfirm,
  onRemove,
  onRemoveImage,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button highlighted={false} size="static" onClick={onRemove}>
          Удалить
        </Button>
        <Button size="static" onClick={onConfirm}>
          Сохранить
        </Button>
      </div>
      <div className={styles.form}>
        <Form
          config={BANNER_CONFIG}
          dropdownList={[]}
          onSetFormValues={onSetFormValue}
          values={formData}
        />
        {image && (
          <TitledContent
            heading="Баннер"
            note="Размер баннера 576x320 px PNG, JPG, JPEG"
          >
            <ImageBlock url={image} onClick={onRemoveImage} />
          </TitledContent>
        )}
      </div>
    </div>
  );
};

export default ActionBanner;
