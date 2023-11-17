export const chain = (dominoes) => {
  const buildChain = (chaining) => {
    if (chaining.length === dominoes.length) {
      if (chaining[0][0] === chaining[chain.length - 1][1]) {
        return chaining;
      }
      return null;
    }

    for (let i = 0; i < dominoes.length; i++) {
      const [a, b] = dominoes[i];
      if (a === chaining[chaining.length - 1][1]) {
        const result = buildChain([...chaining, [a, b]]);
        if (result) {
          return result;
        }
      }
    }

    return null;
  };

  for (let i = 0; i < dominoes.length; i++) {
    const result = buildChain([dominoes[i]]);
    if (result) {
      return result;
    }
  }
  return null;
};
