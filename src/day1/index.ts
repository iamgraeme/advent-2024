import {
  parseListPairs,
  calculateTotalDistance,
  calculateSimilarityScore,
} from './solution';

export async function parseInput(filePath: string): Promise<string> {
  const file = Bun.file(filePath);

  if (!file) {
    throw new Error('File not found');
  }

  const input = await file.text();

  return input.trim();
}

const filePath = './src/day1/input.txt';
const input = await parseInput(filePath);
const list = parseListPairs(input);
const totalDistance = calculateTotalDistance(list);

console.log(totalDistance);

console.log('\nPart 2:');
const similarityScore = calculateSimilarityScore(list);
console.log(similarityScore);
