// default import -------------------------------------
// import sum from './math.js';
// console.log(sum(10, 5));

// named import ---------------------------------------
// import { sum, PI, dob } from './math.js';
// console.log(sum(10, 20));
// console.log(dob(10, 20));

// або

// import * as MyMath from './math.js';

// console.log(MyMath.sum(5, 15));
// console.log(MyMath.PI);

// default + named import ---------------------------------------

import Test1, { sum, PI } from './math.js';

console.log(PI);
const test = new Test1('Test');
console.log(test);
