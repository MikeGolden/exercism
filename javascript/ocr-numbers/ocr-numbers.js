const ocrFont = {
  " _ | ||_|": "0",
  "     |  |": "1",
  " _  _||_ ": "2",
  " _  _| _|": "3",
  "   |_|  |": "4",
  " _ |_  _|": "5",
  " _ |_ |_|": "6",
  " _   |  |": "7",
  " _ |_||_|": "8",
  " _ |_| _|": "9",
};
function extractNums([line1, line2, line3]) {
  if (
    (line1.length + line2.length + line3.length) / 3 !== line1.length ||
    line1.length % 3 !== 0
  ) {
    throw new Error("Invalid character size detected");
  }
  const nums = [];
  for (let i = 0; i < line1.length; i += 3) {
    const num = `${line1.slice(i, i + 3)}${line2.slice(i, i + 3)}${line3.slice(
      i,
      i + 3
    )}`;
    nums.push(num in ocrFont ? ocrFont[num] : "?");
  }
  return nums;
}
export function convert(ocr) {
  return ocr
    .split("\n")
    .flatMap((_, i, rows) => {
      if (i % 4 === 0) {
        const lines = rows.slice(i, i + 3);
        const nums = extractNums(lines);
        return [nums.join("")];
      } else {
        return [];
      }
    })
    .join(",");
}