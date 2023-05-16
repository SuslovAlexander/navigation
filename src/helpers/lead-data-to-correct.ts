export const leaveUsedValues = (
  origin: any,
  usedValues: string[]
): Record<string, any> => {
  const result: any = {};

  for (const key in origin) {
    if (usedValues.includes(key)) result[key] = origin[key];
  }

  return result;
};

export const leadDataToCorrect = (
  origin: any,
  additive: any
): Record<string, any> => {
  const result = { ...origin };

  for (const key in origin) {
    result[key] = { value: origin[key], ...additive[key] };
  }

  return result;
};
