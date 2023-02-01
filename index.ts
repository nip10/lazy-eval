class Lazy {
  private functions: Array<(x: number) => number> = [];

  add(fn: (...args: number[]) => number, ...args: number[]): Lazy {
    this.functions.push((x) => fn(x, ...args));
    return this;
  }

  evaluate(target: number[]): number[] {
    return target.map((item) =>
      this.functions.reduce((acc, fn) => fn(acc), item)
    );
  }
}

export default Lazy;
