//Carlie Guevara x insertionSort1 HackerRank
//Given:
//function insert1(n,arr){}
//arr = all in order minues arr[n-1]
//n=5 length of arr
//starting index=arr[n-1]; direction <-negative

insert1 = (n, arr) => {

this.i = 1;
this.j= 2;

const stored = arr[n-1];

this.index =  arr[n-this.i] ;

this.left = arr[n-this.j];

const comparison = arr[n-this.j] < this.index;

reassignment= () => {

let temp = arr[n-this.j];
arr[n-this.i] = temp;
console.log(arr);
this.i+=1;
this.j+=1;
}



comparison ? reassignment() : insert1(n,arr);


arr.splice(this.j,0,stored);

arr.pop();

console.log(arr);

}


insert1(5, [1,2,4,5,3]);
