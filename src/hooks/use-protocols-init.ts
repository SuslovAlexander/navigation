import { useEffect, useState } from "react";

import { PROTOL_CATEGORY } from "../mock/protocol_category.mock";
import { PROTOCOLS } from "../mock/protocols.mock";

export const useProtocolsInit = (): any => {
  const [categories, setCategories] = useState<any>();
  const [protocols, setProtocols] = useState<any>();

  useEffect(() => {
    setCategories(PROTOL_CATEGORY);
    setProtocols(PROTOCOLS);
  }, []);

  return { categories, protocols };
};
