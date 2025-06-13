<<<<<<< HEAD
// 1. Functional Programming Concepts
// Pure functions and immutability.

//let c = 0;
//function addPure(a, b) {
//   return a + b;
// }

//const arrImmutable = [1, 2];
//const newArrImmutable = [...arrImmutable, 3]; // Original array not mutated
//console.log(arrImmutable);      // [1, 2]
//console.log(newArrImmutable);   // [1, 2, 3]


// 2. Event Loop and Asynchronous JavaScript
// JavaScript handles async code with event loop and microtasks.

// console.log('Start');
 //setTimeout(() => console.log('Timeout'), 0);
 //Promise.resolve().then(() => console.log('Promise'));
 //console.log('End');
// Expected output order: Start, End, Promise, Timeout

// 3. JavaScript Data Types & Type Coercion
// typeof operator and equality comparisons.

 //console.log(typeof 42);           // number
 //console.log(typeof 'hello');      // string
 //console.log(typeof null);         // object (quirk)
 //console.log(1 == '1');            // true (loose equality)
 //console.log(1 === '1');           // false (strict equality)
 //console.log(Boolean(0));          // false (falsy)
 //console.log(Boolean('non-empty'));// true (truthy)

// 4. Error Handling (try/catch/finally)
// Handle runtime errors gracefully.

// try {
//   throw new Error('Oops!');
// } catch (e) {
//   console.log('Caught:', e.message);
// } finally {
//   console.log('Always runs');
// }


// 5. Object Property Shorthand & Computed Property Names
// Shorthand for properties with variable names and dynamic keys.

// const x = 10, y = 20;
// const objShorthand = { x, y };
// console.log(objShorthand); // { x: 10, y: 20 }

// const propName = 'score';
// const computedObj = {
//   [propName]: 100
// };
// console.log(computedObj); // { score: 100 }


// 6. Spread and Rest Operators in Depth
// Spread expands arrays/objects; rest gathers function args.

// const arrA = [1, 2];
// const arrB = [3, 4];
// const combinedAB = [...arrA, ...arrB];
// console.log(combinedAB); // [1, 2, 3, 4]

// function sumAll(...args) {
//   return args.reduce((a,b) => a + b, 10);
// }
// console.log(sumAll(1,2,3,4)); // 10

// 7. Template Literals Extended (multiline & tagged)
// Multiline strings and tagged templates for custom processing.

// const multiline = `This is line 1
// This is line 2`;
// const multilineString = 'This is line 1
// This is line 2'; // Will raise error
// console.log(multiline);

// function tag(strings, ...values) {
//   return strings[0] + values.map((v, i) => `${v.toUpperCase()}${strings[i+1]}`).join('');
  // console.log(strings, values);
  // console.log('---');
  
  // console.log(strings[0]);
  // values.map((v, i) => {
  //   console.log(v.toUpperCase())
  //   console.log(strings[i+1])
  // })
  // console.log('---');
// }
// const tagged = tag`Hello ${'world'}! How are ${'you'} doing?`;
// console.log(tagged); // Hello WORLD! How are YOU?
=======
// 1. Functional Programming Concepts
// Pure functions and immutability.

//let c = 0;
//function addPure(a, b) {
//   return a + b;
// }

//const arrImmutable = [1, 2];
//const newArrImmutable = [...arrImmutable, 3]; // Original array not mutated
//console.log(arrImmutable);      // [1, 2]
//console.log(newArrImmutable);   // [1, 2, 3]


// 2. Event Loop and Asynchronous JavaScript
// JavaScript handles async code with event loop and microtasks.

// console.log('Start');
 //setTimeout(() => console.log('Timeout'), 0);
 //Promise.resolve().then(() => console.log('Promise'));
 //console.log('End');
// Expected output order: Start, End, Promise, Timeout

// 3. JavaScript Data Types & Type Coercion
// typeof operator and equality comparisons.

 //console.log(typeof 42);           // number
 //console.log(typeof 'hello');      // string
 //console.log(typeof null);         // object (quirk)
 //console.log(1 == '1');            // true (loose equality)
 //console.log(1 === '1');           // false (strict equality)
 //console.log(Boolean(0));          // false (falsy)
 //console.log(Boolean('non-empty'));// true (truthy)

// 4. Error Handling (try/catch/finally)
// Handle runtime errors gracefully.

// try {
//   throw new Error('Oops!');
// } catch (e) {
//   console.log('Caught:', e.message);
// } finally {
//   console.log('Always runs');
// }


// 5. Object Property Shorthand & Computed Property Names
// Shorthand for properties with variable names and dynamic keys.

// const x = 10, y = 20;
// const objShorthand = { x, y };
// console.log(objShorthand); // { x: 10, y: 20 }

// const propName = 'score';
// const computedObj = {
//   [propName]: 100
// };
// console.log(computedObj); // { score: 100 }


// 6. Spread and Rest Operators in Depth
// Spread expands arrays/objects; rest gathers function args.

// const arrA = [1, 2];
// const arrB = [3, 4];
// const combinedAB = [...arrA, ...arrB];
// console.log(combinedAB); // [1, 2, 3, 4]

// function sumAll(...args) {
//   return args.reduce((a,b) => a + b, 10);
// }
// console.log(sumAll(1,2,3,4)); // 10

// 7. Template Literals Extended (multiline & tagged)
// Multiline strings and tagged templates for custom processing.

// const multiline = `This is line 1
// This is line 2`;
// const multilineString = 'This is line 1
// This is line 2'; // Will raise error
// console.log(multiline);

// function tag(strings, ...values) {
//   return strings[0] + values.map((v, i) => `${v.toUpperCase()}${strings[i+1]}`).join('');
  // console.log(strings, values);
  // console.log('---');
  
  // console.log(strings[0]);
  // values.map((v, i) => {
  //   console.log(v.toUpperCase())
  //   console.log(strings[i+1])
  // })
  // console.log('---');
// }
// const tagged = tag`Hello ${'world'}! How are ${'you'} doing?`;
// console.log(tagged); // Hello WORLD! How are YOU?
>>>>>>> a9d48f6 (commit)
