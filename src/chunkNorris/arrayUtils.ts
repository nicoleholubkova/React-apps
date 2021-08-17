export const removeDuplicite = <T extends { id: any }>(data: T[]): T[] => {
  return data
    .filter(
      (value, index, array) =>
        array.findIndex((t) => t.id === value.id) === index
    )
    .sort();
};
