import { FC } from "react";

import Button from "../../../components/UI/Button/Button";
import Form from "../../../components/UI/Form/Field/Form";
import { SEMINARS_CONFIG } from "../config/seminars-config";

import styles from "./ActionSeminars.module.css";

const ActionSeminars: FC<any> = ({
  onSetFormValue,
  images,
  onAddImage,
  onRemoveImg,
  formData,
  onSave,
  onRemove,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button highlighted={false} size="static" onClick={onRemove}>
          Удалить
        </Button>
        <Button size="static" onClick={onSave}>
          Сохранить
        </Button>
      </div>
      <div className={styles.form}>
        <Form
          config={SEMINARS_CONFIG}
          dropdownList={[]}
          onSetFormValues={onSetFormValue}
          values={formData}
          images={images}
          onAddImage={onAddImage}
          onRemoveImg={onRemoveImg}
        />
      </div>
    </div>
  );
};

export default ActionSeminars;
