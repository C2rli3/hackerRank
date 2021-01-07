// n = length of array
// arr =  array to be sorted
//Carlie Guevara
//January 6th, 2020
// Jamaica, Queens, New York


function insertionSort1(n, arr){

for(let i=0; i<n;i++)
{
let left = arr[n-(i+2)];
let right = arr[n-(i+1)]
!arr[n-(i+2)]<=arr[n-(i+1)] ? arr[n-(i+2)] = arr[n-(i+1)]  : ' ';
console.log(arr);
}
console.log(arr);
}

insertionSort1(5,[1,2,4,5,3]);
