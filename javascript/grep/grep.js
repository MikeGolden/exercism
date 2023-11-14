#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

const VALID_OPTIONS = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case
  'v', // reverse files results
  'x', // match entire line
];

const ARGS = process.argv.slice(2);

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

files.forEach((file) => {
  const found = readLines(file).reduce((matches, line, no) => {
    comparison(line) === !options.v && matches.push([no + 1, line]);
    return matches;
  }, []);
  !options.l
  ? found.forEach(([no, line]) => console.log(`${files.length > 1 ? file + ':' : ''}${
    options.n ? no + ':' : ''}${line}`))
  : found.length && console.log(file);
});