// this problem is asking to reutn the frequency of the max of an array

function birthday(candles){

candles.sort((a, b) => a - b);

let counter = 0;
let current = candles[candles.length-1];

candles.forEach( individual => individual>=current ? 
(console.log(individual, current),counter++)
 : '');

return counter;
}

console.log(birthday([3, 2, 1, 3]));
