import { FC } from "react";

import { makePrice } from "../../../helpers/make-price";
import { RANDOM } from "../../../helpers/random-id";
import Button from "../../UI/Button/Button";
import Dropdown from "../../UI/Dropdown/Dropdown";
import Input from "../../UI/Input/Input";
import Note from "../../UI/Note/Note";
import PaleSelect from "../../UI/PaleSelect/PaleSelect";
import Select from "../../UI/Select/Select";
import Textarea from "../../UI/Textarea/Textarea";
import BrightSelect from "../BrightSelect/BrightSelect";
import Images from "../Images/Images";
import ProductFeatures from "../ProductFeatures/ProductFeatures";
import ProductTags from "../ProductTags/TagsBlock";
import ProductValue from "../ProductValue/ProductValue";

import TitledContent from "./TitltInputPair/TitledContent";
import { IEditProductProps } from "./IEditProductProps";

import styles from "./EditProduct.module.css";

const tags = ["Name tag", "Name tag", "Name tag"];
const features = ["feature_1"];
const values = ["50мл"];

const handleFake = (): boolean => {
  return true;
};

const EditProduct: FC<IEditProductProps> = ({ product }) => {
  const prodFeatures = Object.values(product);

  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button highlighted={false} size="static" onBtnClick={handleFake}>
          Удалить
        </Button>
        <Button size="static" onBtnClick={handleFake}>
          Сохранить
        </Button>
      </div>
      <div className={styles.content}>
        {prodFeatures.map((feature) =>
          (() => {
            if (Array.isArray(feature)) {
              return (
                <TitledContent heading="Артикул">
                  <Dropdown
                    options={["1", "2", "3"]}
                    selected="1"
                    setSelected={() => true}
                  />
                </TitledContent>
              );
            } else {
              return (
                <TitledContent heading="Артикул">
                  <Input type="text" placeholder={feature} />
                </TitledContent>
              );
            }
          })()
        )}
        <ProductFeatures
          maxFeatures={15}
          title="Характеристики"
          features={features}
        />
        <ProductTags maxTags={120} title="Тэги товаров" tags={tags} />
      </div>
    </div>
  );
};

export default EditProduct;
