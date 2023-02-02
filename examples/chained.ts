import Lazy from '../src/index';

const lazyValue = new Lazy();
lazyValue.add((a) => a + 1);
lazyValue.add((a) => a * 2);
// or lazyValue.add((a) => a + 1, 10).add((a) => a * 2);
const result = lazyValue.evaluate([123]); // [248]

console.log(`Result: ${result}`);
