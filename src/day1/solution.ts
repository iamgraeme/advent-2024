interface ListPairs {
  leftList: number[];
  rightList: number[];
}

export function parseListPairs(input: string): ListPairs {
  const lines = input.trim().split('\n');

  return lines.reduce<ListPairs>(
    (acc, line) => {
      const [left, right] = line
        .split(/\s+/)
        .map((str) => Math.abs(parseInt(str)));

      acc.leftList.push(left);
      acc.rightList.push(right);

      return acc;
    },
    { leftList: [], rightList: [] }
  );
}

export function calculateTotalDistance(pairs: ListPairs): number {
  const sortedLeft = [...pairs.leftList].sort((a, b) => a - b);
  const sortedRight = [...pairs.rightList].sort((a, b) => a - b);

  const total = sortedLeft.reduce((total, leftNum, index) => {
    const rightNum = sortedRight[index];
    return total + Math.abs(leftNum - rightNum);
  }, 0);

  return total;
}
