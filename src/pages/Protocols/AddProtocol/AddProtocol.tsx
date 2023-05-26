import { FC, useState } from "react";

import TitledContent from "../../../components/Products/EditProduct/TitltInputPair/TitledContent";
import Images from "../../../components/Products/Images/Images";
import ProductFeatures from "../../../components/Products/ProductFeatures/ProductFeatures";
import ProductTags from "../../../components/Products/ProductTags/TagsBlock";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import Textarea from "../../../components/UI/Textarea/Textarea";
import { RANDOM } from "../../../helpers/random-id";
import DropWrap from "../../../TablePage/Editor/DropWrap/DropWrap";

import { IAddProtocolProps } from "./IAddProtocolProps";

import styles from "./AddProtocol.module.css";

const AddProtocol: FC<IAddProtocolProps> = ({ items, onAddProtocol }) => {
  /*   const handleBrand = (val: string): void => {
   
  }; */

  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button highlighted={true} size="flex" onBtnClick={onAddProtocol}>
          Сохранить
        </Button>
      </div>
      <div className={styles.content}>
        {items?.map((item: any) => (
          <TitledContent key={RANDOM.id} heading={item.showName}>
            {(() => {
              if (item.type === "input")
                return (
                  <Input
                    placeholder={item.value}
                    type="text"
                    disabled={item.disabled}
                  />
                );
              if (item.type === "dropdown")
                return (
                  <DropWrap
                    options={item.value.map((i: any) => i.name)}
                    onChange={() => true}
                  />
                );
              if (item.type === "images")
                return <Images urlList={item.value} />;
              if (item.type === "textarea")
                return (
                  <Textarea value={item.value} placeholder={item.placeholder} />
                );
              if (item.type === "tags")
                return <ProductTags maxTags={120} tags={item.value} />;
              if (item.type === "feature")
                return (
                  <ProductFeatures features={item.value} maxFeatures={15} />
                );
            })()}
          </TitledContent>
        ))}
        <div className={styles.addition}>
          <p className={styles["title-add"]}>Товары протокола</p>
          <p className={styles["action-add"]}>+ Добавить товар</p>
        </div>
      </div>
    </div>
  );
};

export default AddProtocol;
