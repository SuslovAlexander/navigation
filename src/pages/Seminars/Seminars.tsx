import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import ConfirmAlert from "../../components/ConfirmAlert/ConfirmAlert";
import Modal from "../../components/UI/Modal/Modal";
import Table from "../../components/UI/Table/Table";
import { SEMINAR_FUTURE } from "../../mock/seminar_future.mock";
import { SEMINAR_HISTORY } from "../../mock/seminar_history.mock";
import { SEMINAR_REQUEST } from "../../mock/seminar-request.mock";
import { RANDOM } from "../../shared/utils/random-id";
import SelectedAlert from "../../TablePage/SelectedAlert/SelectedAlert";

import ActionSeminars from "./ActionSeminars/ActionSeminars";
import { SEMINARS_FUTURE_CONFIG } from "./config/seminars-future-config copy";
import { SEMINARS_HISTORY_CONFIG } from "./config/seminars-history-config";
import SeminarsHead from "./SeminarsHead/SeminarsHead";
import { processSeminarFuture } from "./utils/process-seminar-future";
import { processSeminarHistory } from "./utils/process-seminar-history";
import { processSeminarRequest } from "./utils/process-seminar-request";

import styles from "./Seminars.module.css";

const Seminars: FC = () => {
  const [seminars, setSeminars] = useState<any>(SEMINAR_FUTURE);
  const [editMode, setEditMode] = useState<boolean>(false);

  const [activeTab, setActiveTab] = useState("future");
  const [tableEmptyText, setTableEmptyText] = useState("");
  const [canBeDeleted, setCanBeDeleted] = useState<boolean>(false);
  const [hasCheckbox, setHasCheckbox] = useState<boolean>(false);
  const [hasBtnToAdd, setHasBtnToAdd] = useState(true);
  const [tdWidths, setTdWidth] = useState<string[]>(["33%", "33%", "33%"]);
  const [idName, setIdName] = useState("id");
  const [selected, setSelected] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [toggleSelectAll, setToggleSelectAll] = useState(true);
  const [tableHead, setTableHead] = useState<string[]>([]);
  const [tableBody, setTableBody] = useState<any>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSeminar, setSelectedSeminar] = useState<any>();
  const [formData, setFormData] = useState<any>({});
  const [formSeminar, setFormSeminar] = useState({});
  const [formConfig, setFormConfig] = useState<any>({});

  const [showModalRemove, setShowModalRemove] = useState(false);

  const [targetId, setTargetId] = useState<string>("");

  const formSeminarHistory = {
    name: selectedSeminar?.name,
    description: selectedSeminar?.description,
    date: selectedSeminar?.date,
    image: selectedSeminar?.image,
  };

  const immutableBodyFuture = useRef(
    processSeminarFuture(SEMINAR_FUTURE)
  ).current;
  const immutableBodyHistory = useRef(
    processSeminarHistory(SEMINAR_HISTORY)
  ).current;
  const immutableBodyRequest = useRef(
    processSeminarRequest(SEMINAR_REQUEST)
  ).current;
  const [immutableBody, setImmutableBody] = useState<any>();

  const handleSetActiveTab = (tab: string): void => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (!selectedSeminar) {
      return;
    }
    setShowModal(true);
    if (!editMode) {
      setFormData({});
    } else {
      setFormData(formSeminar);
    }
  }, [selectedSeminar, editMode]);

  useEffect(() => {
    if (!selected.length) {
      setShowAlert(false);
    }
  }, [selected]);

  useEffect(() => {
    if (activeTab === "future") {
      setTableBody(processSeminarFuture(seminars));
    }
    if (activeTab === "history") {
      setTableBody(processSeminarHistory(seminars));
    }
    if (activeTab === "applications") {
      setTableBody(processSeminarRequest(seminars));
    }
  }, [seminars]);

  useEffect(() => {
    if (activeTab === "future") {
      setFormConfig(SEMINARS_FUTURE_CONFIG);
      setHasBtnToAdd(true);
      setImmutableBody(immutableBodyFuture);
      setTableEmptyText("Здесь пока нет семинаров");
      setHasCheckbox(true);
      setCanBeDeleted(true);
      setTableHead(["Название", "Спикер", "Дата"]);
      setSeminars(SEMINAR_FUTURE);
      setIdName("name");
      setTdWidth(["33%", "33%", "33%"]);
      return;
    }
    if (activeTab === "history") {
      setFormConfig(SEMINARS_HISTORY_CONFIG);
      setFormSeminar(formSeminarHistory);
      setHasBtnToAdd(true);
      setImmutableBody(immutableBodyHistory);
      setTableEmptyText("Здесь пока нет истории семинаров");
      setHasCheckbox(true);
      setCanBeDeleted(true);
      setTableHead(["Название", "Дата", ""]);
      setSeminars(SEMINAR_HISTORY);
      setIdName("name");
      setTdWidth(["70%", "30%"]);
      return;
    }
    if (activeTab === "applications") {
      setHasBtnToAdd(false);
      setImmutableBody(immutableBodyRequest);
      setTableEmptyText("Здесь пока нет запросов на семинары");
      setHasCheckbox(false);
      setTableHead([
        "Название семинара",
        "Пользователь",
        "Номер телефона",
        "Дата",
      ]);
      setSeminars(SEMINAR_REQUEST);
      setIdName("seminar_name");
      setTdWidth(["25%", "25%", "25%", "25%"]);
    }
  }, [activeTab]);

  const clearBehavior = (): void => {
    setFormData({});
    setSelectedSeminar({});
    setEditMode(false);
  };

  const handleAddSeminar = (): void => {
    clearBehavior();
    setShowModal(true);
  };

  const handleSearch = (str: string): void => {
    const updatedBody = immutableBody.filter(
      (item: any) =>
        item[idName] && item[idName].toLowerCase().includes(str.toLowerCase())
    );
    setTableBody(updatedBody);
  };

  const handleToggleSelectAll = (): void => {
    setShowAlert(!showAlert);
    setToggleSelectAll(!toggleSelectAll);
    const updatedSelected = toggleSelectAll
      ? tableBody.map((item: any) => item[idName])
      : [];
    setSelected(updatedSelected);
  };

  const handleEditSeminar = (data: string): void => {
    const clickedSeminar = seminars.data.find(
      (seminar: any) => seminar[idName] === data
    );
    setSelectedSeminar(clickedSeminar);
    setEditMode(true);
  };

  const handleSaveSeminar = (): void => {
    if (editMode) {
      const seminarToEdit = seminars?.data.find(
        (seminar: any) => seminar.id === selectedSeminar.id
      );
      seminarToEdit.name = formData.name;
      seminarToEdit.datetime = formData.date;
      seminarToEdit.image = formData.image;
      seminarToEdit.description = formData.description;
      seminarToEdit.speaker = formData.speaker;
      seminarToEdit.speaker_speciality = formData.speaker_speciality;
      seminarToEdit.city = { ...seminarToEdit.city, name: formData.city };
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
    setShowModal(false);
  };

  const handleRemoveSeminar = (id: string): void => {
    const updatedSeminars = {
      data: seminars.data.filter((item: any) => item[idName] !== id),
    };
    setSeminars(updatedSeminars);
    setShowModal(false);
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
        tableData={tableBody}
        onSetActiveTab={handleSetActiveTab}
        activeTab={activeTab}
        onAddSeminar={handleAddSeminar}
        hasBtn={hasBtnToAdd}
      />
      <div className={styles.content}>
        <Table
          emptyText={tableEmptyText}
          heading={tableHead}
          tableData={tableBody}
          idName={idName}
          canBeDeleted={canBeDeleted}
          hasCheckbox={hasCheckbox}
          onRemove={(id: string) => {
            setShowModalRemove(true);
            setTargetId(id);
          }}
          onSelect={handleSelect}
          onSelectAll={handleToggleSelectAll}
          onTrClick={handleEditSeminar}
          selectedItems={selected}
          tdWidths={tdWidths}
        />
        <div className={styles.popup}>
          <SelectedAlert
            onDeleteRows={handleRemoveByChecbox}
            selectedAmount={selected.length}
            isOpen={showAlert}
            onClose={() => setShowAlert(false)}
          />
        </div>
        {showModal &&
          createPortal(
            <Modal
              active={showModal}
              setActive={() => setShowModal(false)}
              align="left"
            >
              <ActionSeminars
                formConfig={formConfig}
                formData={formData}
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
