import { FC, ReactElement } from "react";

import Tab from "../Tab/Tab";

import { ITabsProps } from "./ITabsProps";

import styles from "./Tabs.module.css";

const tabValuesNames = [
  { value: "future", name: "Будущие" },
  { value: "history", name: "История" },
  { value: "applications", name: "Заявки на семинар" },
];

const Tabs: FC<ITabsProps> = ({ onSetActiveTab, activeTab }) => {
  return (
    <div className={styles.wrap}>
      {tabValuesNames?.map((tab) => (
        <Tab
          activeTab={activeTab}
          onClick={onSetActiveTab}
          name={tab.name}
          value={tab.value}
          key={tab.value}
        />
      ))}
    </div>
  );
};

export default Tabs;
