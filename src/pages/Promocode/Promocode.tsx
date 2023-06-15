import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import Table from "../../components/UI/Table/Table";
import { PROMOCODES } from "../../mock/promocodes.mock";
import { IPromocode } from "../../shared/interfaces/IPromocode";
import { IShapeofCodes } from "../../shared/interfaces/IShapeOfCodes";
import { shapeOfCode } from "../../shared/shape/shape-of-promocode";
import { RANDOM } from "../../shared/utils/random-id";
import { transformData } from "../../shared/utils/transform-data";
import { TtableData } from "../../TablePage/ITablePageProps";
import { IFormValues } from "../Protocols/ActionProtocol/IActionProtocolProps";

import ActionCode from "./ActionCode/ActionCode";

import styles from "./Promocode.module.css";

const Promocode: FC = () => {
  const [codes, setCodes] = useState<{ data: IPromocode[] }>(PROMOCODES);
  const { head, body } = transformData<IPromocode, IShapeofCodes>(
    codes,
    shapeOfCode
  );
  const [tableBody, setTableBody] = useState<TtableData>(body);
  const [formData, setFormData] = useState<IFormValues>({});
  const [currentCode, setCurrentCode] = useState<Partial<IPromocode>>({});
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setTableBody(body);
  }, [codes]);

  const clearBehaviour = (): void => {
    setCurrentCode({});
    setFormData({});
  };

  const addNewCode = (): void => {
    clearBehaviour();

    setEditMode(false);
    setShowModal(true);
  };

  const handleRemoveProtocol = (id: string): void => {
    const updatedCodes = {
      data: codes.data.filter((item) => item.name !== id),
    };
    setCodes(updatedCodes);
    setShowModal(false);
  };

  const handleSaveCode = (): void => {
    if (editMode) {
      const updatedCode = codes.data.find((code) => code.id === currentCode.id);
      if (updatedCode) {
        updatedCode.name = formData.name;
        updatedCode.promocode = formData.promocode;
        updatedCode.percent = formData.percent;
      }
    } else {
      const newCode = {
        id: RANDOM.id,
        name: formData.name,
        promocode: formData.promocode,
        percent: formData.percent,
      };
      codes.data.push(newCode);
    }
    setCodes({ ...codes });
    setShowModal(false);
  };

  const handleEditCode = (id: string): void => {
    const codeToEdit = codes.data.find((code) => code.name === id);
    if (codeToEdit) {
      const newFormData = {
        name: codeToEdit?.name,
        promocode: codeToEdit?.promocode,
        percent: codeToEdit?.percent,
      };
      setFormData(newFormData);
      setShowModal(true);
      setCurrentCode(codeToEdit);
      setEditMode(true);
    }
  };

  return (
    <>
      <div className={styles.wrap}>
        <Button onClick={addNewCode}>Добавить протокол</Button>
        <Table
          heading={head}
          tableData={tableBody}
          idName={"name"}
          canBeDeleted={true}
          canBeEdit={true}
          onRemove={handleRemoveProtocol}
          onEdit={handleEditCode}
          onTrClick={handleEditCode}
          emptyText="Здесь пока нет протоколов"
        />
      </div>
      {showModal &&
        createPortal(
          <Modal
            active={showModal}
            setActive={() => setShowModal(false)}
            align="left"
          >
            <ActionCode
              formData={formData}
              onSetFormValue={setFormData}
              onConfirm={handleSaveCode}
              onRemove={() => handleRemoveProtocol(currentCode.name as string)}
            />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default Promocode;
