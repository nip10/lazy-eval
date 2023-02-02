// https://github.com/microsoft/TypeScript/issues/1336

// Inferring parts of tuple types

declare function foo<T extends string[], U>(...args: [...T, () => void]): T;

// foo(() => {});  // []
// foo('hello', 'world', () => {});  // ["hello", "world"]
// foo('hello', 42, () => {});  // Error, number not assignable to string

class Lazy<T = number[], U = number> {
  /**
   * Track the functions to be applied later
   */
  private functions: any = [];

  /**
   * Adds a function to the list of functions to be applied later.
   * @param fn The function to add.
   * @param args Optional arguments to pass to the function when it's called.
   * @returns The Lazy instance.
   */
  add<T, U>(fn: (arg0: T, ...args: T[]) => T, ...args: [...T[], () => void]) {
    this.functions.push((x) => fn(x, ...args));
    return this;
  }

  /**
   * Evaluates the list of functions using the given target array. The functions are applied in the
   * order they were added.
   * @param target The target array.
   * @returns An array containing the results of evaluating the functions on the target.
   */
  evaluate(target: T[]): T[] {
    return target.map((item) =>
      this.functions.reduce((acc, fn) => fn(acc), item)
    );
  }
}

export default Lazy;
