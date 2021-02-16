// [Alice, Bob ] <- order of scored returned as a length 2 , array.
// compare each element of the two given array , a[] and  b[] 
// any equalities are a draw, any comparison that results in a greater value, the holding array is awarded the point of the greater element a[i]> b[i] ,Alice get's the job, converseley the opssoitie will award the point to Bob. 

function compareTriplets(a,b){

let returner =[0,0];

for(let i=0;i<a.length;i++){

a[i] ==b[i] ? '' :
(a[i] > b[i] ? returner[0]+=1 :
(a[i]<b[i] ? returner[1]+=1 : '') 
)
//console.log(a,b);
}
//return [a.length,b.length];
return returner;
}


console.log(compareTriplets([17, 28, 30], [99,16,8]));
