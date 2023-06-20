import { FC } from "react";

import { ITabProps } from "./ITabProps";

import styles from "./Tab.module.css";

const Tab: FC<ITabProps> = ({ activeTab, value, name, onClick }) => {
  const tabStyles = `${styles.item} ${
    activeTab === value ? styles.active : ""
  } `;
  return (
    <a onClick={() => onClick(value)} className={tabStyles}>
      {name}
    </a>
  );
};

export default Tab;
