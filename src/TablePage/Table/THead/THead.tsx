import { FC } from "react";

import Checkbox from "../../Checkbox/Checkbox";
import RowTextItem from "../../Row/RowTextItem/RowTextItem";

const THead: FC<any> = ({ tableHeadData }) => {
  return (
    <thead>
      <tr style={{ height: "44px" }}>
        <td>
          <RowTextItem>
            <Checkbox checked={false} id="1" onSelect={() => true} />
          </RowTextItem>
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
