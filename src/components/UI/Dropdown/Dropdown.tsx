import { FC, useEffect, useState } from "react";

import { RANDOM } from "../../../helpers/random-id";
import { ReactComponent as Drop } from "../../../public/assets/images/dropdown.svg";

import ItemDropdown from "./ItemDropdown/ItemDropdown";
import { IDropdownProps } from "./IDropdownProps";

import styles from "./Dropdown.module.css";

const Dropdown: FC<IDropdownProps> = ({ options, selected, setSelected }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (!options.length) return;
    setSelected(options[0]);
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.action} onClick={() => setIsActive(!isActive)}>
        <p className={styles.active}>{selected}</p>
        <div className={styles.arrow}>
          <Drop />
        </div>
      </div>
      {isActive && (
        <div className={styles.content}>
          {options.map((option) => (
            <ItemDropdown
              selected={selected}
              option={option}
              setSelected={setSelected}
              setIsActive={setIsActive}
              key={RANDOM.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
