import { describe, it, expect } from 'vitest';
import Lazy from '../src/index-cache';

describe('Lazy', () => {
  it('should add functions and evaluate them on the target', () => {
    const lazyObj = new Lazy();
    const result = lazyObj
      .add((a) => a * 2) // 4, 6, 4, 8, 4, 10
      .add((a) => a - 1) // 3, 5, 3, 7, 3, 9
      .evaluate([2, 3, 2, 4, 2, 5]);
    expect(result).toStrictEqual([3, 5, 3, 7, 3, 9]);
  });
  it('should add function that takes arg from target', () => {
    const lazyObj = new Lazy();
    const result = lazyObj
      .add((a, b) => a + b, 1) // 2, 3, 4
      .evaluate([1, 2, 3]);
    expect(result).toStrictEqual([2, 3, 4]);
  });
  it('should add function that takes random args and arg from target', () => {
    const lazyObj = new Lazy();
    const result = lazyObj
      .add((a, b, c) => a * b + c, -1, 1) // 0, -1, -2
      .evaluate([1, 2, 3]);
    expect(result).toStrictEqual([0, -1, -2]);
  });
});
