const CORNER = "+";
const HORIZONTAL = "-";
const VERTICAL = "|";
const MIDDLE = "s";
const VALID_HORIZONTALS = [CORNER, HORIZONTAL];

const validCrossOfLength = (length) => (crossSection) =>
  new RegExp(
    `[\\${CORNER}\\${VERTICAL}][\\${VERTICAL}\\${MIDDLE}\\${CORNER}\\${HORIZONTAL}]{${length}}[\\${CORNER}\\${VERTICAL}]`,
  ).test(crossSection);

const validRectangleOfLength = (length) => (crossSection) =>
  new RegExp(
    `\\${CORNER}[\\${CORNER}\\${HORIZONTAL}]{${length}}\\${CORNER}`,
  ).test(crossSection);

export const count = (plane = []) =>
  plane.reduce(
    (rectangles, [...cross], crossInd) =>
      rectangles +
      cross.reduce((count, char, charInd) => {
        if (char === CORNER) {
          for (const [i, nextChar] of [...cross.entries()].slice(charInd + 1)) {
            if (!VALID_HORIZONTALS.includes(nextChar)) break;
            if (nextChar === CORNER) {
              for (const nextCross of plane.slice(crossInd + 1)) {
                const possibleCross = nextCross.slice(charInd, i + 1);
                if (!validCrossOfLength(i - charInd - 1)(possibleCross)) break;
                if (validRectangleOfLength(i - charInd - 1)(possibleCross))
                  count++;
              }
            }
          }
        }

        return count;
      }, 0),
    0,
  );
