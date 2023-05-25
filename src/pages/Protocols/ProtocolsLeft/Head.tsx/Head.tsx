import { FC } from "react";

import Button from "../../../../components/UI/Button/Button";
import Input from "../../../../components/UI/Input/Input";

import { IHeadProps } from "./IHeadProps";

import styles from "./Head.module.css";

const Head: FC<IHeadProps> = ({
  textUi,
  onHandleBlure,
  onHandleClick,
  hasInput,
}) => {
  const handleAction = (): void => {
    if (hasInput) {
      onHandleBlure();
    } else {
      onHandleClick();
    }
  };

  return (
    <div className={styles.head}>
      {hasInput && (
        <Input
          placeholder={textUi.inputText}
          type="text"
          onInputBlur={handleAction}
        />
      )}
      <Button onBtnClick={handleAction}>{textUi.buttonCatText}</Button>
      <div className={styles.title}>{textUi.titleCatText}</div>
    </div>
  );
};

export default Head;
