/*
Pick
Return a copy of the object, filtered to only have values for the
whitelisted keys.
Example:
pick({name: ‘moe’, age: 50, userid: ‘moe1’}, ‘name’, ‘age’);
=> {name: ‘moe’, age: 50}
Hint: Given there’s an indefinite number of arguments, we’ll need to loop
through them. Look up the “rest parameter” syntax.
*/

// Your code here!
const pick = (object, ...params) => {
  const newObject = {};
  params.forEach(element => newObject[element] = object[element]);
  return newObject;
}

// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Pick', () => {
 const list = {a: 1, b: 2, c: 3};

 it('can pick a single property', () => {
   const result = pick(list, 'a');
   const expected = {a: 1};
   assert.deepEqual(result, expected);
 })
 it('can pick multiple properties', () => {
     const result = pick(list, 'a', 'c');
     const expected = {a: 1, c: 3};
     assert.deepEqual(result, expected);
 })
});
