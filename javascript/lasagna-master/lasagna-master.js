/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime)  {
  if (remainingTime === 0) return 'Lasagna is done.';
  if (remainingTime > 0)  return 'Not done, please wait.'
  return 'You forgot to set the timer.';
};

export function preparationTime(layers, avgTime) {
  return layers.length * (avgTime || 2);
}

export function quantities(layers) {
  let noodles = layers.filter((i) => i === 'noodles').length;
  let sauce = layers.filter((i) => i === 'sauce').length;
  return {
    noodles: noodles * 50,
    sauce: sauce * 0.2,
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, numb) {
  let ratio = numb / 2;
  return Object.entries(recipe).reduce((a, [k, v]) => {
    a[k] = v * ratio;
    return a;
  }, {});
}
