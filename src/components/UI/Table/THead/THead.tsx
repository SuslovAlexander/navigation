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
  firsTrWidth,
}) => {
  return (
    <thead>
      <tr style={{ height: "44px" }}>
        {hasCheckbox && (
          <td>
            <Checkbox id={RANDOM.id} onSelect={onSelectAll} />
          </td>
        )}

        {tableHeadData.map((item: any, index: number) => {
          return (
            <td key={index} style={{ width: firsTrWidth }}>
              {(firsTrWidth = "")}
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
