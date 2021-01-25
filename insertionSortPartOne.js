//Carlie Guevara x insertionSort1 HackerRank
//Given:
//function insert1(n,arr){}
//arr = all in order minues arr[n-1]
//n=5 length of arr
//starting index=arr[n-1]; direction <-negative

insert1 = (n, arr) => {

this.store = arr[n-1];
this.values = arr.reverse().values();
n-=1;

queueMicrotask( () => {

for(const current of this.values) {

(current<arr[n]) 
? (
 arr.pop(),
arr.splice(n,0,this.store),
arr.reverse(),
console.log(arr)
)
: ( 
arr[n] = arr[n-1],
console.log(arr),
n-=1
)
}

});

}

insert1(5, [1,2,4,5,3]);
