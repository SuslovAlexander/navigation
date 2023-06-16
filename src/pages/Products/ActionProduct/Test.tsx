import { FC } from "react";

const Test: FC<any> = ({ f }) => {
  return <div>{f()}</div>;
};

export default Test;
