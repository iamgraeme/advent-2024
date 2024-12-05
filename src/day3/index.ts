import { parseInput } from '../utils';
import { multiply } from './solution';

const filePath = './src/day3/input.txt';
export const input = await parseInput(filePath);

console.log(multiply(input));
