import { FC } from "react";

import { IItemDropdownProps } from "./IItemDropdownProps";

import styles from "./ItemDropdown.module.css";

const ItemDropdown: FC<IItemDropdownProps> = ({
  option,
  selected,
  setSelected,
  setIsActive,
}) => {
  const itemSteles = `${styles.item} ${
    option === selected ? styles.selected : ""
  }`;

  const handleItemClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.textContent) setSelected(e.currentTarget.textContent);
    setIsActive(false);
  };

  return (
    <div className={itemSteles} onClick={handleItemClick}>
      {option}
    </div>
  );
};

export default ItemDropdown;
