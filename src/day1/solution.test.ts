import { expect, test, describe, it } from 'bun:test';
import { parseListPairs, calculateTotalDistance } from './solution';

describe('Day 1', () => {
  describe('calculateTotalDistance', () => {
    it('should calculate the total distance between paired numbers', () => {
      const input = {
        leftList: [1, 2, 3, 3, 3, 4],
        rightList: [3, 3, 3, 4, 5, 9],
      };

      const result = calculateTotalDistance(input);
      expect(result).toBe(11);
    });
  });

  describe('parseListPairs', () => {
    test('should parse input into left and right lists', () => {
      const input = `3   4
4      3
2   5
1   3`;

      const expected = {
        leftList: [3, 4, 2, 1],
        rightList: [4, 3, 5, 3],
      };

      expect(parseListPairs(input)).toEqual(expected);
    });
  });
});
