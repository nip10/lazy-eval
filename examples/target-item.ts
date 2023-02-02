import Lazy from '../src/index';

const lazyValue = new Lazy();
lazyValue.add((a, b) => a + b, 10);
const result = lazyValue.evaluate([10, 20]); // [20, 30]

console.log(`Result: ${result}`);
