class Lazy {
  /**
   * Track the functions to be applied later
   */
  private functions: Array<(x: number) => number> = [];

  /**
   * Adds a function to the list of functions to be applied later.
   * @param fn The function to add.
   * @param args Optional arguments to pass to the function when it's called.
   * @returns The Lazy instance.
   */
  add(fn: (...args: number[]) => number, ...args: number[]): Lazy {
    this.functions.push((x) => fn(x, ...args));
    return this;
  }

  /**
   * Evaluates the list of functions using the given target array. The functions are applied in the
   * order they were added.
   * @param target The target array.
   * @returns An array containing the results of evaluating the functions on the target.
   */
  evaluate(target: number[]): number[] {
    return target.map((item) =>
      this.functions.reduce((acc, fn) => fn(acc), item)
    );
  }
}

export default Lazy;
