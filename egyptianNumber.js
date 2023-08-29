/*
    Egyptian Numbers
    The decimal numeral system is composed of ten digits, which we represent as "0123456789" (the digits in a system are written from lowest to highest). Imagine you have discovered an egyptian numeral system composed of some number of digits, which may or may not be the same as those used in decimal. For example, if the egyptian numeral system were represented as "oF8", then the numbers one through ten would be (F, 8, Fo, FF, F8, 8o, 8F, 88, Foo, FoF). We would like to be able to work with numbers in arbitrary egyptian systems. More generally, we want to be able to convert an arbitrary number that's written in one egyptian system into a second egyptian system.

List Item
Input Format

The first line of input gives the number of cases, N. N test cases follow. Each case is a line formatted as

egyptian_number source_language target_language
Each language will be represented by a list of its digits, ordered from lowest to highest value. No digit will be repeated in any representation, all digits in the egyptian number will be present in the source language, and the first digit of the egyptian number will not be the lowest valued digit of the source language (in other words, the egyptian numbers have no leading zeroes). Each digit will either be a number 0-9, an uppercase or lowercase letter, or one of the following symbols !"#$%&'()*+,-./:;<=>?@[]^_`{|}~

Constraints

1 ≤ N ≤ 100.

Small dataset

1 ≤ num digits in egyptian_number ≤ 4, 2 ≤ num digits in source_language ≤ 16, 2 ≤ num digits in target_language ≤ 16.

Large dataset

1 ≤ egyptian_number (in decimal) ≤ 1000000000, 2 ≤ num digits in source_language ≤ 94, 2 ≤ num digits in target_language ≤ 94.

Output Format

For each test case, output one line containing "Case #x: " followed by the egyptian number translated from the source language to the target language.

Sample Input 0

4
9 0123456789 oF8
Foo oF8 0123456789
13 0123456789abcdef 01
CODE O!CDE? A?JM!.
Sample Output 0

Case #1: Foo
Case #2: 9
Case #3: 10011
Case #4: JAM!
*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function processData() {
let caseNumber = 1;
  let numCases = 0;

  rl.on("line", (line) => {
    if (numCases === 0) {
      numCases = parseInt(line);
    } else if(caseNumber <= numCases) {
  const sourceMapping = new Map();
  const targetMapping = new Map();        
      const parts = line.split(" ");
      const egyptianNumber = parts[0];
      const sourceLanguage = parts[1];
      const targetLanguage = parts[2];

      for (let i = 0; i < sourceLanguage.length; i++) {
        sourceMapping.set(sourceLanguage[i], i);
      }

      for (let i = 0; i < targetLanguage.length; i++) {
        targetMapping.set(i, targetLanguage[i]);
      }

      const result = solveTestCase(
        egyptianNumber,
        sourceMapping,
        targetMapping
      );

      console.log(`Case #${caseNumber}: ${result}`);
      caseNumber++;

      if (caseNumber > numCases) {
        rl.close();
      }
    }
  });
}

function getTargetIfBaseIsEqual(egyptianNumber, sourceMapping, targetMapping){
    let str="";
    for(const char of egyptianNumber){
        const i = sourceMapping.get(char);
        str+=targetMapping.get(i);
    }
    return str
}

function solveTestCase(egyptianNumber, sourceMapping, targetMapping) {
  if(sourceMapping.size === targetMapping.size){
      return getTargetIfBaseIsEqual(egyptianNumber, sourceMapping, targetMapping)
  }
  const decimalNumber = convertEgyptianToDecimal(egyptianNumber, sourceMapping);
  const targetNumber = convertDecimalToTarget(decimalNumber, targetMapping);
  return targetNumber;
}

function convertDecimalToTarget(decimalNumber, targetMapping) {
  let targetNumber = "";
  const base = targetMapping.size;
  while (decimalNumber > 0) {
    const remainder = decimalNumber % base;
    targetNumber = targetMapping.get(remainder) + targetNumber;
    decimalNumber = Math.floor(decimalNumber / base);
  }
  return targetNumber;
}

function convertEgyptianToDecimal(egyptianNumber, sourceMapping) {
  let decimalNumber = 0;
  const base = sourceMapping.size;
  for (const char of egyptianNumber) {
    decimalNumber = decimalNumber * base + sourceMapping.get(char);
  }
  return decimalNumber;
}


processData()
