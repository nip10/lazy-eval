import Lazy from '../src/index';

const lazyValue = new Lazy();
lazyValue.add((a) => a + 1);
const result = lazyValue.evaluate([123]); // [124]

console.log(`Result: ${result}`);
