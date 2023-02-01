import { describe, it, expect } from 'vitest';
import Lazy from '../index-generics';

describe('Lazy', () => {
  it('should add functions and evaluate them on the target', () => {
    const lazyObj = new Lazy();
    const result = lazyObj
      .add((a) => a * 2) // 2, 4, 6
      .add((a) => a - 1) // 1, 3, 5
      .evaluate([1, 2, 3]);
    expect(result).toStrictEqual([1, 3, 5]);
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
  it('should accept strings as target', () => {
    const lazyObj = new Lazy<string>();
    const result = lazyObj
      .add((a) => a.toUpperCase())
      .evaluate(['dog', 'cat', 'bird']);
    expect(result).toStrictEqual(['DOG', 'CAT', 'BIRD']);
  });
});
