import { useEffect, useRef, useState } from "react";

import { SEMINAR_FUTURE } from "../../mock/seminar_future.mock";
import { SEMINAR_HISTORY } from "../../mock/seminar_history.mock";
import { SEMINAR_REQUEST } from "../../mock/seminar-request.mock";

import { SEMINARS_FUTURE_CONFIG } from "./config/seminars-future-config copy";
import { SEMINARS_HISTORY_CONFIG } from "./config/seminars-history-config";
import { processSeminarFuture } from "./utils/process-seminar-future";
import { processSeminarHistory } from "./utils/process-seminar-history";
import { processSeminarRequest } from "./utils/process-seminar-request";

export const useToggleTab = (): any => {
  const [idName, setIdName] = useState("name");
  const [seminars, setSeminars] = useState<any>(SEMINAR_FUTURE);
  const [activeTab, setActiveTab] = useState("future");
  const [selectedSeminar, setSelectedSeminar] = useState<any>();

  const [initTableDataState, setInitTableState] = useState<any>({
    tableHead: [],
    tableBody: [],
  });

  const [initSettingsTableState, setInitSettingsTableState] = useState<any>({
    hasBtnToAdd: true,
    immutableBody: null,
    tableEmptyText: "",
    hasCheckbox: true,
    canBeDeleted: false,
    tdWidths: ["33%", "33%", "33%"],
  });

  const [initFormState, setInitFormState] = useState<any>({
    formConfig: {},
    formSeminar: {},
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

  const formSeminarHistory = {
    name: selectedSeminar?.name,
    description: selectedSeminar?.description,
    date: selectedSeminar?.date,
    image: selectedSeminar?.image,
  };

  const formSeminarFuture = {
    name: selectedSeminar?.name,
    description: selectedSeminar?.description,
    date: selectedSeminar?.datetime,
    speaker: selectedSeminar?.speaker,
    speaker_speciality: selectedSeminar?.speaker_speciality,
    city: selectedSeminar?.city?.name,
    image: selectedSeminar?.image,
  };

  useEffect(() => {
    if (activeTab === "future") {
      setInitTableState({
        tableHead: ["Название", "Спикер", "Дата"],
        tableBody: processSeminarFuture(seminars),
      });
    }
    if (activeTab === "history") {
      setInitTableState({
        tableHead: ["Название", "Дата", ""],
        tableBody: processSeminarHistory(seminars),
      });
    }
    if (activeTab === "applications") {
      setInitTableState({
        tableHead: [
          "Название семинара",
          "Пользователь",
          "Номер телефона",
          "Дата",
        ],
        tableBody: processSeminarRequest(seminars),
      });
      setIdName("seminar_name");
    }
  }, [seminars]);

  useEffect(() => {
    if (activeTab === "future") {
      setInitSettingsTableState({
        ...initSettingsTableState,
        immutableBody: immutableBodyFuture,
        hasCheckbox: true,
        tableEmptyText: "Здесь пока нет семинаров",
        canBeDeleted: true,
        tdWidths: ["40%", "40%", "20%"],
      });
      setSeminars(SEMINAR_FUTURE);
      return;
    }
    if (activeTab === "history") {
      setInitSettingsTableState({
        ...initSettingsTableState,
        immutableBody: immutableBodyHistory,
        hasCheckbox: true,
        tableEmptyText: "Здесь пока нет истории семинаров",
        canBeDeleted: true,
        tdWidths: ["80%", "20%"],
      });
      setSeminars(SEMINAR_HISTORY);
      return;
    }
    if (activeTab === "applications") {
      setInitSettingsTableState({
        ...initSettingsTableState,
        immutableBody: immutableBodyRequest,
        hasCheckbox: false,
        tableEmptyText: "Здесь пока нет запросов на семинары",
        canBeDeleted: true,
        tdWidths: ["25%", "25%", "30%", "20%"],
      });
      setSeminars(SEMINAR_REQUEST);
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === "future") {
      setInitFormState({
        formConfig: SEMINARS_FUTURE_CONFIG,
        formSeminar: formSeminarFuture,
      });
    }
    if (activeTab === "history") {
      setInitFormState({
        formConfig: SEMINARS_HISTORY_CONFIG,
        formSeminar: formSeminarHistory,
      });
    }
  }, [selectedSeminar]);

  return {
    idName,
    seminars,
    activeTab,
    initFormState,
    selectedSeminar,
    initTableDataState,
    initSettingsTableState,
    setActiveTab,
    setSeminars,
    setInitFormState,
    setInitTableState,
    setSelectedSeminar,
  };
};
