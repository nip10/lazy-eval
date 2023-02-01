import Lazy from '../index';

const lazyValue = new Lazy();
lazyValue.add((a, b, c) => a * b + c, -1, 10);
const result = lazyValue.evaluate([10, 20]); // [0, -10]

console.log(`Result: ${result}`);
