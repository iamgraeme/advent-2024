export const multiply = (str: string) => {
  const regex = /(do\(\)|don't\(\)|mul\(\d+,\d+\))/g;
  const instructions = str.match(regex);

  console.log(instructions);

  let enabled = true;

  return instructions!.reduce((acc, curr) => {
    if (curr === 'do()') {
      enabled = true;
      return acc;
    }
    if (curr === "don't()") {
      enabled = false;
      return acc;
    }
    if (!enabled) return acc;

    const numberRegex = /\d+,\d+/g;
    const match = curr.match(numberRegex);
    const sum = match!.reduce((innerAcc, innerCurr) => {
      const [num1, num2] = innerCurr.split(',');
      return (innerAcc += Number(num1) * Number(num2));
    }, 0);
    return (acc += sum);
  }, 0);
};
