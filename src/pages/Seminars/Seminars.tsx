import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import Modal from "../../components/UI/Modal/Modal";
import Table from "../../components/UI/Table/Table";
import { SEMINAR_FUTURE } from "../../mock/seminar_future.mock";
import { SEMINAR_HISTORY } from "../../mock/seminar_history.mock";
import { SEMINAR_REQUEST } from "../../mock/seminar-request.mock";
import SelectedAlert from "../../TablePage/SelectedAlert/SelectedAlert";

import ActionSeminars from "./ActionSeminars/ActionSeminars";
import SeminarsHead from "./SeminarsHead/SeminarsHead";
import { processSeminarFuture } from "./utils/process-seminar-future";
import { processSeminarHistory } from "./utils/process-seminar-history";
import { processSeminarRequest } from "./utils/process-seminar-request";

import styles from "./Seminars.module.css";

const Seminars: FC = () => {
  const [activeTab, setActiveTab] = useState("future");
  const [tableEmptyText, setTableEmptyText] = useState("");
  const [canBeDeleted, setCanBeDeleted] = useState<boolean>(false);
  const [hasCheckbox, setHasCheckbox] = useState<boolean>(false);
  const [canBeEdit, setCanBeEdit] = useState<boolean>(false);
  const [tdWidths, setTdWidth] = useState<string[]>(["33%", "33%", "33%"]);
  const [idName, setIdName] = useState("id");
  const [selected, setSelected] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [toggleSelectAll, setToggleSelectAll] = useState(true);

  const [tableHead, setTableHead] = useState<string[]>([]);
  const [tableBody, setTableBody] = useState<any>([]);

  const [showModal, setShowModal] = useState(false);

  const [activeProduct, setActiveProduct] = useState({
    name: "",
    description: "",
    speaker: "",
    speaker_speciality: "",
    city: "",
    date: "",
    image: "",
  });

  const [formData, setFormData] = useState({
    name: activeProduct.name,
    description: activeProduct.description,
    speaker: activeProduct.speaker,
    speaker_speciality: activeProduct.speaker_speciality,
    city: activeProduct.city,
    date: activeProduct.date,
    image: activeProduct.image,
  });

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
    if (!selected.length) {
      setShowAlert(false);
    }
  }, [selected]);

  useEffect(() => {
    if (activeTab === "future") {
      setImmutableBody(immutableBodyFuture);
      setTableEmptyText("Здесь пока нет семинаров");
      setHasCheckbox(true);
      setCanBeEdit(false);
      setCanBeDeleted(true);
      setTableHead(["Название", "Спикер", "Дата"]);
      setTableBody(processSeminarFuture(SEMINAR_FUTURE));
      setIdName("name");
      setTdWidth(["33%", "33%", "33%"]);
      return;
    }
    if (activeTab === "history") {
      setImmutableBody(immutableBodyHistory);
      setTableEmptyText("Здесь пока нет истории семинаров");
      setHasCheckbox(true);
      setCanBeEdit(false);
      setCanBeDeleted(true);
      setTableHead(["Название", "Дата", ""]);
      setTableBody(processSeminarHistory(SEMINAR_HISTORY));
      setIdName("name");
      setTdWidth(["70%", "30%"]);
      return;
    }
    if (activeTab === "applications") {
      setImmutableBody(immutableBodyRequest);
      setTableEmptyText("Здесь пока нет запросов на семинары");
      setHasCheckbox(false);
      setCanBeEdit(false);
      setTableHead([
        "Название семинара",
        "Пользователь",
        "Номер телефона",
        "Дата",
      ]);
      setTableBody(processSeminarRequest(SEMINAR_REQUEST));
      setIdName("seminar_name");
      setTdWidth(["25%", "25%", "25%", "25%"]);
    }
  }, [activeTab]);

  const handleSearch = (str: string): void => {
    const updatedBody = immutableBody.filter(
      (item: any) =>
        item[idName] && item[idName].toLowerCase().includes(str.toLowerCase())
    );
    setTableBody(updatedBody);
  };

  const handleDelete = (): void => {
    const updatedTableData = tableBody.filter(
      (item: any) => !selected.includes(item[idName])
    );
    setSelected([]);
    setTableBody(updatedTableData);
    setShowAlert(false);
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

  const handleToggleSelectAll = (): void => {
    setShowAlert(!showAlert);
    setToggleSelectAll(!toggleSelectAll);
    const updatedSelected = toggleSelectAll
      ? tableBody.map((item: any) => item[idName])
      : [];
    setSelected(updatedSelected);
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
      />
      <div className={styles.content}>
        <Table
          emptyText={tableEmptyText}
          heading={tableHead}
          tableData={tableBody}
          idName={idName}
          canBeDeleted={canBeDeleted}
          hasCheckbox={hasCheckbox}
          canBeEdit={canBeEdit}
          onEdit={() => null}
          onRemove={() => null}
          onSelect={handleSelect}
          onSelectAll={handleToggleSelectAll}
          onTrClick={() => setShowModal(true)}
          selectedItems={selected}
          tdWidths={tdWidths}
        />
        <div className={styles.popup}>
          <SelectedAlert
            onDeleteRows={handleDelete}
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
                formData={formData}
                onSetFormValue={setFormData}
                onRemove={() => null}
                onSave={() => null}
                images={[activeProduct.image]}
                onRemoveImg={() => null}
                onAddImage={() => null}
              />
            </Modal>,
            document.body
          )}
      </div>
    </div>
  );
};

export default Seminars;
