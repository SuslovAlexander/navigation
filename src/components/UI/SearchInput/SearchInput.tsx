import { FC } from "react";

import { ReactComponent as Clear } from "../../../public/assets/images/clear.svg";
import { ReactComponent as Mark } from "../../../public/assets/images/mark.svg";
import { ReactComponent as Search } from "../../../public/assets/images/search.svg";

import { ISearchInputProps } from "./ISearchInputProps";

import styles from "./SearchInput.module.css";

const SearchInput: FC<ISearchInputProps> = ({
  value,
  onChange,
  handleMarkClick,
  handleSearch,
  placeholder,
  variant,
}) => {
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  const handleSearchClick = (): void => {
    if (handleSearch) {
      handleSearch(value);
    }
  };

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.code === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.search} onClick={handleSearchClick}>
        <Search />
      </div>
      <input
        className={styles.input}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        onKeyDown={handleInputKeyDown}
      />

      <div className={styles.clear} onClick={handleMarkClick}>
        {variant === "cross" && <Clear />}
        {variant === "mark" && <Mark />}
      </div>
    </div>
  );
};

export default SearchInput;
