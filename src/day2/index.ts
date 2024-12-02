import { parseInput } from '../utils';
import { parseReports, countSafeReports } from './solution';

const filePath = './src/day2/input.txt';
const input = await parseInput(filePath);
const reports = parseReports(input);
const safeReportsCount = countSafeReports(reports);

console.log('Number of safe reports:', safeReportsCount);
