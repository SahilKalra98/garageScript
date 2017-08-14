const addFunction = require('./sol.js');

const test = (a,b,c) => {
  const result = (addFunction(a,b) === c) ? console.log('Correct') : console.log('Wrong')
  return result;
}

test(2,2,4);
test(2,6,8);
test(-1,-1,-2);
