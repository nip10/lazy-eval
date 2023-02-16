Instructions
Take an object of the form:

{ a: { b: { c:1 } }, d: 2 }
And return an object where properties are only one level deep, with their depth represented in dot notation.

{ 'a.b.c': 1, d: 2 }
For the exercise:

Do not concern yourself with primitives or edge cases;
Assume you have safe valid (but arbitrarily nested) objects;
Assume there are no circular references in the objects you receive.
