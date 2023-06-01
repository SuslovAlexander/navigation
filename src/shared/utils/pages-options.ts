export const getOptions = (amount: number, range: number[]): number[] => {
  const selectOptions: number[] = [];
  range.forEach((item) => {
    if (amount > item) {
      selectOptions.push(item);
    }
  });

  return selectOptions;
};
