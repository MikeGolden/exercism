export const proverb = (...items) => {
  const qualifier =
    typeof items[items.length - 1] === "object"
      ? items.pop().qualifier + " "
      : "";
  const lines = [];

  for (let i = 0; i < items.length - 1; i++) {
    lines.push(`For want of a ${items[i]} the ${items[i + 1]} was lost.`);
  }

  if (items.length > 0) {
    lines.push(`And all for the want of a ${qualifier}${items[0]}.`);
  }

  return lines.join("\n");
};
