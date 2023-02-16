const input = { a: { b: { c: 1, f: 3 } }, d: 2 };

const tempOutput = {};
const flatten = (input, objKeys = []) => {
  Object.entries(input).forEach(([key, value]) => {
    let finalKey = [...objKeys, key];
    if (typeof value !== 'object') {
      tempOutput[finalKey.join('.')] = value;
    } else {
      flatten(value, finalKey);
    }
  });
  return tempOutput;
};

const output = flatten(input);
console.log('output', output);
