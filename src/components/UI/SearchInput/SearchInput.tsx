import { FC, useState } from "react";

import { ReactComponent as Clear } from "../../../public/assets/images/clear.svg";
import { ReactComponent as Mark } from "../../../public/assets/images/mark.svg";
import { ReactComponent as Search } from "../../../public/assets/images/search.svg";

import { ISearchInputProps } from "./ISearchInputProps";

import styles from "./SearchInput.module.css";

const SearchInput: FC<ISearchInputProps> = ({ placeholder, variant }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.search}>
        <Search />
      </div>
      <input
        className={styles.input}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />

      <div className={styles.clear}>
        {variant === "cross" && <Clear />}
        {variant === "mark" && <Mark />}
      </div>
    </div>
  );
};

export default SearchInput;
