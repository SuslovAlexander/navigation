import { FC, useState } from "react";
import { createPortal } from "react-dom";

import { ReactComponent as Pencil } from "../../../public/assets/images/edit.svg";
import { ReactComponent as Image } from "../../../public/assets/images/no-image_large.svg";
import { ReactComponent as Trash } from "../../../public/assets/images/trash.svg";
import ConfirmAlert from "../../ConfirmAlert/ConfirmAlert";
import ActionBtn from "../../UI/ActionBtn/ActionBtn";
import Modal from "../../UI/Modal/Modal";

import { IBrandProps } from "./IBrandProps";

import styles from "./Brand.module.css";

const Brand: FC<IBrandProps> = ({ url, text, id, onEdit, onRemove }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleEdit = (): void => {
    if (onEdit) {
      onEdit(id);
    }
    //do something when Edit is clicked
  };

  const handleRemove = (): void => {
    setShowModal(true);
    //if (onRemove) onRemove(id);
    //do something when Remove is clicked
  };

  return (
    <div className={styles.wrap}>
      <div className={styles["image-wrap"]}>
        {/*  <img src={url} width="100%" height="100%" /> */}
        <div className={styles.image}>
          <Image />
        </div>
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.actions}>
        <ActionBtn onClick={handleEdit}>
          <Pencil />
        </ActionBtn>

        <ActionBtn onClick={handleRemove}>
          <Trash />
        </ActionBtn>
      </div>
      {showModal &&
        createPortal(
          <Modal
            active={showModal}
            setActive={() => setShowModal(false)}
            align="center"
          >
            <ConfirmAlert
              header="Вы действительно хотите удалить бренд"
              text={text}
              onConfirm={onRemove?.bind(null, id)}
              onCancel={() => setShowModal(false)}
            />
          </Modal>,
          document.body
        )}
    </div>
  );
};

export default Brand;
