import { parseInput } from '../utils';
import {
  parseReports,
  countSafeReports,
  countSafeReportsWithDampener,
} from './solution';

const filePath = './src/day2/input.txt';
const input = await parseInput(filePath);
const reports = parseReports(input);

console.log(countSafeReports(reports));
console.log(countSafeReportsWithDampener(reports));
