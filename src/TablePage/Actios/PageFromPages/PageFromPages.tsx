import { FC } from "react";

import PageInput from "../PageInput/PageInput";

import { IPageFromPagesProps } from "./IPageFromPagesProps";

import styles from "./PageFromPages.module.css";

const PageFromPages: FC<IPageFromPagesProps> = ({ from, current }) => {
  return (
    <div className={styles.wrap}>
      <span className={styles.text}>Страница</span>
      <PageInput current={current} />
      <span className={styles.from}>из {from}</span>
    </div>
  );
};

export default PageFromPages;
