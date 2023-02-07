import Lazy from './dist/index.mjs';

const lazy = new Lazy();
lazy.add((a) => a * 2);
const res = lazy.evaluate([2, 4]); // 4

console.log('lazy', res);
