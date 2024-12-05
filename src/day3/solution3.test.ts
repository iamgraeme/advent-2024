import { describe, expect, it } from 'bun:test';
import { multiply } from './solution';

describe('', () => {
  const testSection =
    'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';
  it(`The ${testSection} should equal 161`, () => {
    expect(multiply(testSection)).toEqual(161);
  });
});
