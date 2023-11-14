#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to read lines from a file
function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

// Valid options for the grep command
const VALID_OPTIONS = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case
  'v', // reverse files results
  'x', // match entire line
];

// Extract command-line arguments
const ARGS = process.argv.slice(2);

// Parse options and files from command-line arguments
const options = ARGS.filter(arg => arg.startsWith('-') && VALID_OPTIONS.includes(arg.slice(1)))
  .reduce((opts, arg) => { opts[arg.slice(1)] = true; return opts; }, {}),
  files = ARGS.filter(arg => !arg.startsWith('-'));
const pattern = files.shift(),
  comparison = 
    options.x
    ? options.i
      ? (line) => line.toLowerCase() === pattern.toLowerCase()
      : (line) => line === pattern
    : options.i
      ? (line) => line.toLowerCase().includes(pattern.toLowerCase())
      : (line) => line.includes(pattern);

// Process each file
files.forEach((file) => {
  // Find lines that match the pattern
  const found = readLines(file).reduce((matches, line, no) => {
    comparison(line) === !options.v && matches.push([no + 1, line]);
    return matches;
  }, []);

  // Output matching lines based on options
  !options.l
  ? found.forEach(([no, line]) => console.log(`${files.length > 1 ? file + ':' : ''}${
    options.n ? no + ':' : ''}${line}`))
  : found.length && console.log(file);
});
