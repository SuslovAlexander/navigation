interface SeminarFuture {
  name: string;
  speaker: string;
  datetime: string;
}

export const processSeminarFuture = (obj: any): SeminarFuture[] => {
  return obj?.data?.map((future: any) => ({
    name: future?.name,
    speaker: future?.speaker,
    datetime: future?.datetime?.split(" ")[0],
  }));
};
