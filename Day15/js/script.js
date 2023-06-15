






//let a = parseInt(prompt('Nhap vao a'));
//let b = parseInt(prompt('Nhap vao b'));
//let c = parseInt(prompt('Nhap vao c'));

//if (a > 0 && b > 0 && c > 0) {
//    if ((a + b >c) && (b + c > a) && (a +b > b)) {
 //       if (a === b || b === c || c === a) {
//            if (a=== b && b === c) alert('Day la tam giac deu');
 //           else if ((a**2 + b**2 === c**2) || (b**2 + c**2 === a**2)) {
 //           else alert('day la tam giac can');
 //       } else if ((a**2 + b**2 === c**2) || (b**2 + c**2 === a**2) || (a**2 + c**2 === b**2)) {}
  //      else alert ('3 canh nhap vao la 3 canh tam giac');
  //  }
//} else {
   // alert('3 so nhap vao khong phai 3 canh tam giac');
// 
for (let a = 0; a < 10; a++) {
    console.log(a);
} 
// lan 1: a = 0: 0 < 10 => log(0); a++ => 0+1
// lan 2: a = 1; 1 < 10 => log(1); a++ => 1+1
//
//lan 9: a = 8; 8 < 10 => log(8); a++ => 8+1
// nhập vào số a bất kỳ. in ra tất cả các số 0 đến a
var a = parseInt(prompt('nhap vao so a'));
for (let i = 0; i < a ; i++) {
    console.log(i);
}
// vd 2 nhập vào số a bất kỳ. in ra các số chắn lớn hơn 0 và bé hơn a 

var a = parseInt(prompt('nhap vao so a'));

for (let i = 0; i < a ; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// btvn 
// 1 in ra các số từ 1-1000 theo thứ tự tăng dần 
// 2 in ra các số từ 1-1000 theo thứ tự giảm dần
// 3 nhập vào 1 số bất kỳ  > 0. in ra bằng bảng cửu chương của số đó 