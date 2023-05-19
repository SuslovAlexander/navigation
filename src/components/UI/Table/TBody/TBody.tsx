import { FC } from "react";

import { RANDOM } from "../../../../helpers/random-id";
import TableTr from "../TableTr/TableTr";

const TBody: FC<any> = ({
  tableBodyData,
  onSelect,
  selectedItems,
  onTrClick,
  idName,
  hasCheckbox,
}) => {
  const handleOnTrClick = (id: string): void => {
    onTrClick();
  };

  return (
    <tbody>
      {tableBodyData.map((row: any) => {
        return (
          <TableTr
            idName={idName}
            selectedItems={selectedItems}
            onSelect={onSelect}
            data={row}
            key={RANDOM.id}
            /*  onTrClick={(val) => handleOnTrClick(val)} */
            onTrClick={onTrClick}
            hasCheckbox={hasCheckbox}
          />
        );
      })}
    </tbody>
  );
};

export default TBody;
