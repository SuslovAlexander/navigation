import { FC, useEffect, useState } from "react";

import { ReactComponent as Drop } from "../../../public/assets/images/dropdown.svg";

import ItemDropdown from "./ItemDropdown/ItemDropdown";
import { IDropdownProps } from "./IDropdownProps";

import styles from "./Dropdown.module.css";

const Dropdown: FC<IDropdownProps> = ({
  placeholder,
  options,
  value,
  onChange,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [backdrop, setBackdrop] = useState<boolean>(false);

  const closeDropdown = (): void => {
    setIsActive(false);
  };

  const handleActive = (): void => {
    setBackdrop(true);
    closeDropdown();
    setIsActive(!isActive);
  };

  const handleBackdrop = (): void => {
    closeDropdown();
    setBackdrop(false);
  };
 
  return (
    <>
      {backdrop && <div className={styles.backdrop} onClick={handleBackdrop} />}
      <div className={styles.wrap}>
        <div
          tabIndex={0}
          className={styles.action}
          onKeyDown={(e) => {
            if (e.code === "Space") {
              handleActive();
            }
          }}
          onClick={handleActive}
        >
          <p className={styles.active}>{value || placeholder}</p>
          <div className={styles.arrow}>
            <Drop />
          </div>
        </div>
        {isActive && (
          <div className={styles.content}>
            {options?.map((option, index) => (
              <ItemDropdown
                selected={value}
                option={option}
                setSelected={onChange}
                setIsActive={setIsActive}
                key={index}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
