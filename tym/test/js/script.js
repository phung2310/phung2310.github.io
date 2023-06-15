// var 
// let 
// const
// var a = 0;
// var b = 1;
// var sum = 0;
// if (a <= b) {   //false
//     sum = a + b;
// } else { //true
//     sum = a - b;
// }

// if (a === b) { //so sanh bang
//     sum = a * b;
// } else if (a < b) {
//     sum = a / b;
// } else { 
//     sum = a ** b; // a ^ b
// }
 
// for (let i = 0; i <= 10; i++) {
//     sum += i; // sum = sum + i;
// } //loop

//lap lan 1: khoi tao i = 0. Check dieu kien 0 <= 10 ==> true; thuc hien sum += i (sum ban dau = 0 ==> sum = 0 + 0); i++ ===> i = 0 + 1
//lan lap thu 2: i = 1. Check dieu kien 1 <= 10 ==> true; thuc hien sum += i (sum = 0 ==> sum = 0 + 1); i++ ===> i = 1 + 1
//lan lap thu 11: i = 10. Check dieu kien 10 <= 10 ==> true; thuc hien sum += i (sum = 9 ==> sum = 9 + 1); i++ ===> i = 10 + 1
//lan lap thu 12: i = 11. Check dieu kien 10 <= 10 ==> false ===> dung vong lap

//function
// function tinhTong(a, b) { //hàm
//     sum = a + b;
//     // return sum;
//     console.log('Tong sum la ' + sum); //11
// }
// console.log(tinhTong(5, 6)); //undefined

// tinhTong(5, 6);
// console.log('ket qua la ' + sum);

// function tinhTong(a, b) {
//     sum = a + b;

//     return sum;
// }

// tinhTong(5, 6);

// console.log('Ket qua la ' + tinhTong(5, 6));
// let c=0;
// function vidu(c){
//     console.log(c)
// }
// vidu(c)
//  var a = 5;
//  var b = 6;
//  sum = 0;
//  if (a <= b) {
//     sum = a + b;
//  }

//  if (a >= b) {
//     sum = a - b;
//  } else {
//     sum = b - a;
//  }

//  if (a > b) {
//     sum = a + b;
//  }

//  for (let i = 0; i <= 10; i++) {
//     sum += i;
//  }

//  function tinhTong(a , b) {
//     let sum = a + b;
//     console.log('đây là hàm tính tổng' + a + 'và ' + b + ' là ' + sum);
//  }
// tinhTong(1, 2);

// function tinhTich(a, b){
//     let sum = a * b;

//     return sum;
//     console.log( + sum);
//     // return sum;
// }

// console.log( + tinhTich(2, 3) );

