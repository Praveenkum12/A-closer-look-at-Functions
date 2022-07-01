'use strict';

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   //higher-order function
//   console.log(fn(str));
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const high5 = function () {
//   console.log('😮‍💨');
// };

// document.body.addEventListener('click', high5);
// ['Praveen', 'Priya', 'Amudha'].forEach(high5);

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Priya');
// greeterHey('Praveen');

// greet('Hello')('Priya');

// const flipoPer = {
//   airplane: 'Flipo-Per',
//   iatacode: 'FP',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airplane} ${this.iatacode}${flightNum}`
//     );
//     this.booking.push({
//       name,
//       flight: `The ${this.iatacode}${flightNum} has been booked!`,
//     });
//     console.log(this.booking);
//   },
// };

// const akantoDevre = {
//   airplane: 'akanto-Devre',
//   iatacode: 'AK',
//   booking: [],
// };

// const passangers = [45, 'Jonas schedtmann'];
// const books = flipoPer.book;
// books.call(akantoDevre, 83, 'Termi Cooper');
// books.apply(flipoPer, passangers);
// books.call(flipoPer, ...passangers);

// const rectify = books.bind(flipoPer, 23);
// rectify('Will Smith');
// rectify('Steve Jobs');

// flipoPer.numberOfPerson = 300;
// flipoPer.atrocities = function () {
//   console.log(this);
//   this.numberOfPerson++;
//   console.log(this.numberOfPerson);
// };

// const check = document.querySelector('.buy');
// check.addEventListener('click', flipoPer.atrocities.bind(flipoPer));

// const addTax = function (rate) {
//   return function (value) {
//     console.log(value + value * rate);
//   };
// };

// const addRes = addTax.bind(null, 0.23);
// const addRes = addTax(0.23);
// addRes(100);
// addRes(23);

// const poll = {
//   question: 'What is your favourite programming language',
//   options: ['0: javascript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),

//   registerNewAnswer: function () {
//     const answer = Number(
//       prompt(
//         `${this.question} \n ${this.options.join(
//           '\n'
//         )} \n (Write option number)`
//       )
//     );
//     console.log(answer);

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
// console.log(this.answers);
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// let f;

// const x = function () {
//   const z = 10;
//   console.log('has been called');
//   return (f = function (n) {
//     console.log(n * z);
//   });
// };

// x();
// f(34);

// (function () {
//   console.log('Heloo my name is Termi');
// })();

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
