# YLD Lazy

This is a simple implementation of lazy evaluation in TypeScript.

## What is lazy evaluation?

Lazy evaluation is an evaluation strategy which delays the evaluation of an expression until its value is needed.

## Usage

First, import the `Lazy` class.

```ts
import Lazy from '<path-to-index.ts>';
```

Then, create a Lazy instance by calling `new Lazy()`.

```ts
const lazyValue = new Lazy();
```

Now you can use the `add` method to add a function that will be called when the value is needed. You can add as many functions as you want. The functions will be called in the order they were added.

```ts
lazyValue.add((a) => a + 1);
```

Finally, you can get the value by calling the `evaluate` method with the target input.

```ts
const result = lazyValue.evaluate([123]); // 124
```

## API

### `new Lazy()`

Creates a new Lazy instance, which models a lazy computation.
A Lazy instance has two methods detailed below.

### `lazy.add(fn [, arg1, arg2, ..., argN]) => Lazy`

Adds a function to the chain of functions to be evaluated at a later stage.
When the function is called it will be called with the remaining arguments supplied
to add (if any) followed by a single argument that will be an item from the target
array supplied to evaluate.

#### Parameters

| Name          | Type       | Description                                                                                              | Required |
| ------------- | ---------- | -------------------------------------------------------------------------------------------------------- | -------- |
| fn            | `Function` | The function to add.                                                                                     | Yes      |
| arg1...argN-1 | `number`   | The argument to pass to the function.                                                                    | No       |
| argN          | `number`   | The **last** argument to pass to the function. Value needs to exist in the target when calling evaluate. | No       |

#### Returns

`Lazy` - The Lazy instance.

### `lazy.evaluate(target) => number[]`

Evaluates the lazy value.

#### Parameters

| Name   | Type       | Description            | Required |
| ------ | ---------- | ---------------------- | -------- |
| target | `number[]` | The input to evaluate. | Yes      |

#### Returns

`number[]` - The result of the evaluation.

## Examples

The following examples are available in `/examples`.

### Basic

```ts
const lazyValue = new Lazy();

lazyValue.add((a) => a + 1);

const result = lazyValue.evaluate([123]); // [124]
```

### Chained

```ts
const lazyValue = new Lazy();

lazyValue.add((a) => a + 1);
lazyValue.add((a) => a * 2);
// or lazyValue.add((a) => a + 1, 10).add((a) => a * 2);

const result = lazyValue.evaluate([123]); // [248]
```

### With item from target array

```ts
const lazyValue = new Lazy();

lazyValue.add((a, b) => a + b, 10);

const result = lazyValue.evaluate([10, 20]); // [20, 30]
```

### With multiple arguments

```ts
const lazyValue = new Lazy();

lazyValue.add((a, b, c) => a * b + c, -1, 10);

const result = lazyValue.evaluate([10, 20]); // [0, -10]
```

## Development

### Install dependencies

```sh
yarn install
```

### Run tests

```sh
yarn run test
```

We use [Vitest](https://vitest.dev/) for testing.

### Build

```sh
yarn run build
```

More scripts are available in `package.json` for misc tasks such as lint, format...

## License

MIT License

## Notes

JS version available in `index.js`.

TS version available in `index.ts`.

TS version with support for strings available in `index-generics.ts`.

TS version with caching available in `index-cache.ts`.
