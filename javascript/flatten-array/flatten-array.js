export const flatten = (nestedList) => {
  let result = [];

  const processList = (list) => {
    list.forEach((item) => {
      if (Array.isArray(item)) {
        processList(item);
      } else if (item !== null && item !== undefined) {
        result.push(item);
      }
    });
  };

  processList(nestedList);
  return result;
};
