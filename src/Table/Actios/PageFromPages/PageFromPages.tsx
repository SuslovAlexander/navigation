import { FC } from "react";

import PageInput from "../PageInput/PageInput";

import { IPageFromPagesProps } from "./IPageFromPagesprops";

import styles from "./PageFromPages.module.css";

const PageFromPages: FC<IPageFromPagesProps> = ({ from }) => {
  return (
    <div className={styles.wrap}>
      <span className={styles.text}>Страница</span>
      <PageInput current={1} />
      <span className={styles.from}>из {from}</span>
    </div>
  );
};

export default PageFromPages;
