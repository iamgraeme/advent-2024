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
