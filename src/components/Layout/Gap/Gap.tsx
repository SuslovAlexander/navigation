import { FC } from "react";

import { IGapProps } from "./IGapProps";

const Gap: FC<IGapProps> = ({ gap }) => {
  return <div style={{ marginBottom: gap }} />;
};

export default Gap;
