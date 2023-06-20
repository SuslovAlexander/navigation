interface SeminarHistory {
  name: string;
  date: string;
}

export const processSeminarHistory = (obj: any): SeminarHistory[] => {
  return obj.data.map((history: any) => ({
    name: history?.name,
    date: history?.date,
  }));
};
