import { formatPhoneNumber } from "./format-phone";

export function transformData<T, D extends object, R>(
  origin: { data: T[] },
  shape: D
): { head: string[]; body: R[] } {
  const head = Object.keys(shape);

  const body = origin.data.map((item: any) => {
    const cellData: any = {};

    Object.values(shape).forEach((value: any) => {
      if (value in item) {
        if (value === "phone") {
          cellData[value] = formatPhoneNumber(item[value]);
        } else {
          cellData[value] = item[value];
        }
      }
    });

    return cellData;
  });
  return { head, body };
}
