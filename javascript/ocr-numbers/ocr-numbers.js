// OCR font dictionary representing characters 0-9 and '?' for unrecognized characters
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

// Function to extract numbers from OCR lines
function extractNums([line1, line2, line3]) {
  // Check if the lines' lengths are consistent with OCR font dimensions
  if (
    (line1.length + line2.length + line3.length) / 3 !== line1.length ||
    line1.length % 3 !== 0
  ) {
    throw new Error("Invalid character size detected");
  }

  const nums = [];
  // Loop through each set of three characters horizontally to extract a number
  for (let i = 0; i < line1.length; i += 3) {
    // Concatenate three characters from each line to form a potential OCR number representation
    const num = `${line1.slice(i, i + 3)}${line2.slice(i, i + 3)}${line3.slice(i, i + 3)}`;
    // Check if the constructed number exists in the OCR font, otherwise, use '?'
    nums.push(num in ocrFont ? ocrFont[num] : "?");
  }
  return nums;
}

// Main function to convert an OCR string to numbers
export function convert(ocr) {
  return ocr
    // Split the OCR input into rows using line breaks and process them
    .split("\n")
    // Use flatMap to process OCR rows, skipping every 4th row (empty separator)
    .flatMap((_, i, rows) => {
      if (i % 4 === 0) {
        // Extract lines forming a potential number (each number is represented by 3 lines)
        const lines = rows.slice(i, i + 3);
        // Extract the numbers from the lines and join them together
        const nums = extractNums(lines);
        return [nums.join("")];
      } else {
        return [];
      }
    })
    // Join the extracted numbers separated by commas
    .join(",");
}
