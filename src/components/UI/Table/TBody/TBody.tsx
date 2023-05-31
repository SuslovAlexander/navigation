import { FC } from "react";

import { RANDOM } from "../../../../helpers/random-id";
import EmptyParagraph from "../../EmptyParagraph/EmptyParagraph";
import TableTr from "../TableTr/TableTr";

import styles from "./TBody.module.css";

const TBody: FC<any> = ({
  tableBodyData,
  onSelect,
  selectedItems,
  onTrClick,
  idName,
  hasCheckbox,
  canBeDeleted,
  canBeEdit,
  onRemove,
  onEdit,
  emptyText,
}) => {
  if (!tableBodyData.length)
    return (
      <div className={styles.empty}>
        <EmptyParagraph text={emptyText} />
      </div>
    );

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
            onTrClick={onTrClick}
            hasCheckbox={hasCheckbox}
            canBeDeleted={canBeDeleted}
            canBeEdit={canBeEdit}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        );
      })}
    </tbody>
  );
};

export default TBody;
