export const getOptions = (amount: number, range: number[]): number[] => {
  const selectOptions: number[] = [];
  if (amount <= range[0]) {
    selectOptions.push(amount);
  }
  range.forEach((item) => {
    if (amount > item) {
      selectOptions.push(item);
    }
  });

  return selectOptions;
};
