import { FC } from "react";

import { RANDOM } from "../../../../helpers/random-id";
import RowTextItem from "../../../../TablePage/RowTextItem/RowTextItem";
import Checkbox from "../../Checkbox/Checkbox";

import { ITHeadProps } from "./ITHeadProps";

const THead: FC<ITHeadProps> = ({ tableHeadData, onSelectAll }) => {
  return (
    <thead>
      <tr style={{ height: "44px" }}>
        <td>
          <Checkbox
            id={RANDOM.id}
            onSelect={onSelectAll}
          />
        </td>
        {tableHeadData.map((item: any, i: any) => {
          return (
            <td key={i}>
              <RowTextItem>{item[0]}</RowTextItem>
            </td>
          );
        })}
      </tr>
    </thead>
  );
};

export default THead;
