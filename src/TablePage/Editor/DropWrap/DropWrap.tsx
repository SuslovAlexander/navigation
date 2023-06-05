import { FC, useState } from "react";

import Dropdown from "../../../components/UI/Dropdown/Dropdown";

const DropWrap: FC<any> = ({ options, onChange }) => {
  const [selected, setSelected] = useState("");

  const handleSelected = (val: string): void => {
    onChange(val);
    setSelected(val);
  };

  return (
    <>
      <Dropdown options={options} value={selected} onChange={handleSelected} />
    </>
  );
};

export default DropWrap;
