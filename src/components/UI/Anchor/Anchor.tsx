import { FC } from "react";

import { IAnchorProps } from "./IAnchorProps";

import styles from "./Anchor.module.css";

const Anchor: FC<IAnchorProps> = ({ children, color, onAnchorClick }) => {
  return (
    <a
      className={styles.anchor}
      style={{ color: color }}
      onClick={onAnchorClick}
    >
      {children}
    </a>
  );
};

export default Anchor;
