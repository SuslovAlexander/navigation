import { FC, useState } from "react";

import Dropdown from "../../../components/UI/Dropdown/Dropdown";

const DropWrap: FC<any> = ({options}) => {
  const [selected, setSelected] = useState("");
  return (
    <>
      <Dropdown
        options={options}
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
};

export default DropWrap;
