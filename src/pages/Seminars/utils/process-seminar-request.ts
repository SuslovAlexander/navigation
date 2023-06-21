import { formatPhoneNumber } from "../../../shared/utils/format-phone";

interface SeminarRequest {
  seminar_name: string;
  user: string;
  phone: string;
  date: string;
}

export const processSeminarRequest = (obj: any): SeminarRequest[] => {
  return obj.data.map((seminar: any) => ({
    seminar_name: seminar?.seminar?.name,
    user: seminar?.user?.name + " " + seminar?.user?.lastName,
    phone: formatPhoneNumber(seminar?.user?.phone),
    date: seminar?.date,
  }));
};
