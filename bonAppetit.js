function bonAppetit(bill, k, b) {
//b is the amount of money Anna contributes to the bill
//k is the index of the item she did not eat
//bill is an array of all prices
let sum = 0;
bill.map(current => sum+=current);
sum = sum-bill[k];
let uPay = sum/2;
let correctPay = Math.abs(b-uPay);
b==uPay ? console.log("Bon Appetit") : console.log(correctPay);
}


bonAppetit([3,10,2,9], 1, 7);
