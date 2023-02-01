import { describe, it, expect } from 'vitest';
import Lazy from '../index';

describe('Lazy', () => {
  it('should work with one arg - fn', async () => {
    const lazyObj = new Lazy();
    const result = lazyObj
      .add((a) => a * 2) // 2, 4, 6
      .evaluate([1, 2, 3]);
    expect(result).toStrictEqual([2, 4, 6]);
  });
  it('should work with two args - fn & number from target', async () => {
    const lazyObj = new Lazy();
    const result = lazyObj
      .add((a, b) => a + b, 1) // 2, 3, 4
      .evaluate([1, 2, 3]);
    expect(result).toStrictEqual([2, 3, 4]);
  });
  it('should work with three args - fn & random number & number from target', async () => {
    const lazyObj = new Lazy();
    const result = lazyObj
      .add((a, b, c) => a * b + c, -1, 1) // 0, -1, -2
      .evaluate([1, 2, 3]);
    expect(result).toStrictEqual([0, -1, -2]);
  });
});
