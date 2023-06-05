import { leadDataToCorrect, leaveUsedValues } from "./lead-data-to-correct";

export function getFeatures(allData: any, usedData: any, additive: any): any {
  const used = leaveUsedValues(allData, usedData);
  const correctProduct = leadDataToCorrect(used, additive);
  const prodFeatures = Object.values(correctProduct);
  return prodFeatures;
}
