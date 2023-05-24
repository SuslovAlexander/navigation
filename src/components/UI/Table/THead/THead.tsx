import { FC } from "react";

import { RANDOM } from "../../../../helpers/random-id";
import RowTextItem from "../../../../TablePage/RowTextItem/RowTextItem";
import Checkbox from "../../Checkbox/Checkbox";

import { ITHeadProps } from "./ITHeadProps";

const THead: FC<ITHeadProps> = ({
  tableHeadData,
  onSelectAll,
  hasCheckbox,
  canBeDeleted,
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

        {tableHeadData.map((item: any) => {
          return (
            <td key={RANDOM.id} style={{ width: firsTrWidth }}>
              {(firsTrWidth = "")}
              <RowTextItem>{item}</RowTextItem>
            </td>
          );
        })}
        {canBeDeleted && <td />}
      </tr>
    </thead>
  );
};

export default THead;
