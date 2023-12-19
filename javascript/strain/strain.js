export const keep = (collection, predicate) => {
  const kept = [];
  for (const element of collection) {
    if (predicate(element)) {
      kept.push(element);
    }
  }
  return kept;
};

export const discard = (collection, predicate) => {
  const discarded = [];
  for (const element of collection) {
    if (!predicate(element)) {
      discarded.push(element);
    }
  }
  return discarded;
};
