import { parseInput } from '../utils';
import {
  parseListPairs,
  calculateTotalDistance,
  calculateSimilarityScore,
} from './solution';

const filePath = './src/day1/input.txt';
const input = await parseInput(filePath);
const list = parseListPairs(input);
const totalDistance = calculateTotalDistance(list);

console.log(totalDistance);

console.log('\nPart 2:');
const similarityScore = calculateSimilarityScore(list);
console.log(similarityScore);
