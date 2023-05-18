import { FC } from "react";

import TitledContent from "../../components/Products/EditProduct/TitltInputPair/TitledContent";
import Images from "../../components/Products/Images/Images";
import ProductFeatures from "../../components/Products/ProductFeatures/ProductFeatures";
import ProductTags from "../../components/Products/ProductTags/TagsBlock";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Textarea from "../../components/UI/Textarea/Textarea";
import { RANDOM } from "../../helpers/random-id";

import DropWrap from "./DropWrap/DropWrap";

import styles from "./Editor.module.css";

const Editor: FC<any> = ({ items }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button highlighted={false} size="static" onBtnClick={() => true}>
          Удалить
        </Button>
        <Button size="static" onBtnClick={() => true}>
          Сохранить
        </Button>
      </div>
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
              return <DropWrap options={item.value.map((i: any) => i.name)} />;
            if (item.type === "images") return <Images urlList={item.value} />;
            if (item.type === "textarea")
              return <Textarea value={item.value}/>;
            if (item.type === "tags")
              return <ProductTags maxTags={120} tags={item.value} />;
            if (item.type === "feature")
              return <ProductFeatures features={item.value} maxFeatures={15} />;
          })()}
        </TitledContent>
      ))}
    </div>
  );
};

export default Editor;
