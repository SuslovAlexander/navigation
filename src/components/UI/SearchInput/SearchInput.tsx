import { FC, useState } from "react";

import { ReactComponent as Clear } from "../../../public/assets/images/clear.svg";
import { ReactComponent as Search } from "../../../public/assets/images/search.svg";

import { ISearchInputProps } from "./ISearchInputProps";

import styles from "./SearchInput.module.css";

const SearchInput: FC<ISearchInputProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = (e) => {
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
        <Clear />
      </div>
    </div>
  );
};

export default SearchInput;
