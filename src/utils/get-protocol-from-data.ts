export const getProtocolFormData = (origin: any): any => {
  const resData = {
    name: origin?.name,
    brand: origin?.brand?.name,
    description: origin?.description,
    category: origin?.protocol_category?.name,
  };
  return resData;
};
