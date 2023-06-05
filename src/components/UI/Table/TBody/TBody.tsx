import { FC } from "react";

import EmptyParagraph from "../../EmptyParagraph/EmptyParagraph";
import TableTr from "../TableTr/TableTr";

import { TTBodyProps } from "./TTBodyProps";

import styles from "./TBody.module.css";

const TBody: FC<TTBodyProps> = ({
  tableData,
  idName,
  emptyText,
  selectedItems,
  hasCheckbox,
  canBeDeleted,
  canBeEdit,
  onSelect,
  onTrClick,
  onRemove,
  onEdit,
}) => {
  if (!tableData?.length) {
    return (
      <div className={styles.empty}>
        <EmptyParagraph text={emptyText} />
      </div>
    );
  }

  return (
    <tbody>
      {tableData.map((row: Record<string, string>, index: number) => {
        return (
          <TableTr
            idName={idName}
            selectedItems={selectedItems}
            onSelect={onSelect}
            data={row}
            key={index}
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
