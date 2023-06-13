import { FC } from "react";

import { RANDOM } from "../../../../shared/utils/random-id";
import RowTextItem from "../../../../TablePage/RowTextItem/RowTextItem";
import Checkbox from "../../Checkbox/Checkbox";

import { ITHeadProps } from "./ITHeadProps";

const THead: FC<ITHeadProps> = ({
  tableHeadData,
  onSelectAll,
  hasCheckbox,
  canBeDeleted,
  canBeEdit,
  tdWidths,
}) => {
  return (
    <thead>
      <tr style={{ height: "44px" }}>
        {hasCheckbox && (
          <td>
            <Checkbox id={RANDOM.id} onSelect={onSelectAll} />
          </td>
        )}

        {tableHeadData.map((item, index) => {
          return (
            <td key={index} style={{ width: tdWidths ? tdWidths[index] : "" }}>
              <RowTextItem>{item}</RowTextItem>
            </td>
          );
        })}
        {canBeDeleted && <td />}
        {canBeEdit && <td />}
      </tr>
    </thead>
  );
};

export default THead;
