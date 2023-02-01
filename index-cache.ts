class Lazy {
  /**
   * Track the functions to be applied later
   */
  private functions: Array<(x: number) => number> = [];
  /**
   * Track the results of the functions applied to each item in the target array.
   */
  private cachedResults: Map<number, number> = new Map<number, number>();

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
    return target.map((item) => {
      // If the item has already been evaluated, return the cached result.
      const cachedResult = this.cachedResults.get(item);
      if (cachedResult !== undefined) {
        console.info(`\x1b[33m Returning cached result for ${item} \x1b[0m`);
        return cachedResult;
      }
      const result = this.functions.reduce((acc, fn) => fn(acc), item);
      this.cachedResults.set(item, result);
      return result;
    });
  }
}

export default Lazy;
