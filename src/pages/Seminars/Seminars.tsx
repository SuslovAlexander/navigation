import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import ConfirmAlert from "../../components/ConfirmAlert/ConfirmAlert";
import Modal from "../../components/UI/Modal/Modal";
import Table from "../../components/UI/Table/Table";
import { RANDOM } from "../../shared/utils/random-id";
import SelectedAlert from "../../TablePage/SelectedAlert/SelectedAlert";

import ActionSeminars from "./ActionSeminars/ActionSeminars";
import SeminarsHead from "./SeminarsHead/SeminarsHead";
import { useToggleTab } from "./use-toggle-tab";

import styles from "./Seminars.module.css";

const Seminars: FC = () => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const [selected, setSelected] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [toggleSelectAll, setToggleSelectAll] = useState(true);
  const [formData, setFormData] = useState<any>({});

  const [showModalForm, setShowModalForm] = useState(false);
  const [showModalRemove, setShowModalRemove] = useState(false);

  const [targetId, setTargetId] = useState<string>("");

  const {
    idName,
    activeTab,
    initFormState,
    initTableDataState,
    setActiveTab,
    setSelectedSeminar,
    setInitFormState,
    setInitTableState,
    initSettingsTableState,
    seminars,
    selectedSeminar,
    setSeminars,
  } = useToggleTab();

  const clearBehavior = (): void => {
    setInitFormState({ ...initFormState, formSeminar: {} });
    setSelectedSeminar({});
    setEditMode(false);
  };

  useEffect(() => {
    if (!selectedSeminar) {
      return;
    }
    setShowModalForm(true);
  }, [selectedSeminar]);

  const handleAddSeminar = (): void => {
    clearBehavior();
    setShowModalForm(true);
  };

  const handleSearch = (str: string): void => {
    const updatedBody = initSettingsTableState.immutableBody.filter(
      (item: any) =>
        item[idName] && item[idName].toLowerCase().includes(str.toLowerCase())
    );
    setInitTableState({ ...initTableDataState, tableBody: updatedBody });
  };

  const handleToggleSelectAll = (): void => {
    setShowAlert(!showAlert);
    setToggleSelectAll(!toggleSelectAll);
    const updatedSelected = toggleSelectAll
      ? initTableDataState.tableBody.map((item: any) => item[idName])
      : [];
    setSelected(updatedSelected);
  };

  const handleSeminarClick = (seminarId: string): void => {
    const clickedSeminar = seminars.data.find(
      (seminar: any) => seminar[idName] === seminarId
    );
    setSelectedSeminar(clickedSeminar);
    setEditMode(true);
  };

  const handleSaveSeminar = (): void => {
    if (editMode) {
      const seminarToEdit = seminars?.data.find(
        (seminar: any) => seminar.id === selectedSeminar.id
      );
      if (seminarToEdit) {
        seminarToEdit.name = formData.name;
        seminarToEdit.datetime = formData.date;
        seminarToEdit.image = formData.image;
        seminarToEdit.description = formData.description;
        seminarToEdit.speaker = formData.speaker;
        seminarToEdit.speaker_speciality = formData.speaker_speciality;
        seminarToEdit.city = { ...seminarToEdit.city, name: formData.city };
      }
    } else {
      const newSeminar = {
        id: RANDOM.id,
        name: formData.name,
        datetime: formData.datetime,
        description: formData.description,
        speaker: formData.speaker,
        speaker_speciality: formData.speaker_speciality,
        city: { id: RANDOM.id, name: "" },
        image: formData.image,
      };
      seminars.data.push(newSeminar);
    }

    setSeminars({ ...seminars });
    setShowModalForm(false);
  };

  const handleRemoveSeminar = (id: string): void => {
    const updatedSeminars = {
      data: seminars.data.filter((item: any) => item[idName] !== id),
    };
    setSeminars(updatedSeminars);
    setShowModalForm(false);
  };

  const handleSelect = (val: string): void => {
    let updatedSelected = [...selected];
    if (!updatedSelected.includes(val)) {
      updatedSelected.push(val);
    } else {
      updatedSelected = updatedSelected.filter((item) => item !== val);
    }
    setSelected(updatedSelected);
    setShowAlert(true);
  };

  const handleRemoveByChecbox = (): void => {
    const updatedSeminarsData = seminars?.data.filter(
      (item: any) => !selected.includes(item[idName])
    );
    setSelected([]);
    setSeminars({ data: updatedSeminarsData });
    setShowAlert(false);
  };

  return (
    <div className={styles.wrap}>
      <SeminarsHead
        onResetSearch={() => handleSearch("")}
        onSearch={handleSearch}
        setCurrentSlice={() => null}
        tableData={initTableDataState.tableBody}
        onSetActiveTab={setActiveTab}
        activeTab={activeTab}
        onAddSeminar={handleAddSeminar}
        hasBtn={initSettingsTableState.hasBtnToAdd}
      />
      <div className={styles.content}>
        <Table
          emptyText={initSettingsTableState.tableEmptyText}
          heading={initTableDataState.tableHead}
          tableData={initTableDataState.tableBody}
          idName={idName}
          canBeDeleted={initSettingsTableState.canBeDeleted}
          hasCheckbox={initSettingsTableState.hasCheckbox}
          onRemove={(id: string) => {
            setShowModalRemove(true);
            setTargetId(id);
          }}
          onSelect={handleSelect}
          onSelectAll={handleToggleSelectAll}
          onTrClick={handleSeminarClick}
          selectedItems={selected}
          tdWidths={initSettingsTableState.tdWidths}
        />
        <div className={styles.popup}>
          <SelectedAlert
            onDeleteRows={handleRemoveByChecbox}
            selectedAmount={selected.length}
            isOpen={showAlert}
            onClose={() => setShowAlert(false)}
          />
        </div>
        {showModalForm &&
          createPortal(
            <Modal
              active={showModalForm}
              setActive={() => setShowModalForm(false)}
              align="left"
            >
              <ActionSeminars
                formConfig={initFormState.formConfig}
                formData={initFormState.formSeminar}
                onSetFormValue={setFormData}
                onRemove={() => null}
                onSave={handleSaveSeminar}
                images={[selectedSeminar?.image]}
                onRemoveImg={() => null}
                onAddImage={() => null}
              />
            </Modal>,
            document.body
          )}
        {showModalRemove &&
          createPortal(
            <Modal
              active={showModalRemove}
              setActive={() => setShowModalRemove(false)}
              align="center"
            >
              <ConfirmAlert
                header="Вы действительно хотите удалить семинар"
                text={selectedSeminar?.name}
                onConfirm={() => {
                  handleRemoveSeminar(targetId);
                  setShowModalRemove(false);
                }}
                onCancel={() => setShowModalRemove(false)}
              />
            </Modal>,
            document.body
          )}
      </div>
    </div>
  );
};

export default Seminars;
