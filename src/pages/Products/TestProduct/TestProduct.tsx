import { FC, useEffect, useState } from "react";

const TestProduct: FC<any> = ({ data }) => {
  const [dataProd, setDataProds] = useState<any>();
  useEffect(() => {
    setDataProds(data);
  }, []);
  if (!dataProd) return <></>;

  return <div>{dataProd.id}</div>;
};

export default TestProduct;
