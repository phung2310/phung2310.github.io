alert('this is alert');
//có 3 kiểu khai báo biến (var, let, )
var number1 = 1; //khai báo thông dụng nhaasrt.pham vi: global
let number2 = 2;//cũng là kiểu khai báo biên. pv: in cropss
const number3 = 3;//khai báo (hằng số

//các kiểu dữ liệu :string, number, bool,array, object, null, undefined, NaN(Not a number)
//Functional
//Hướng đối tượng: class 
var string = "hello";//khai báo chuỗi
var number = 1000; //khai báo kiểu số 
var bool = true; // boolean có kiểu true or false
var array = [1, 2, 3, 4, 5, 6]; // ma trận 1 chiều gồm n phân tử
var array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]; //1 mảng lớn gồm 3 ptu con, mỗi ptu gồm 4 ptu cháu

//array = [index:
var arrayString = ['red', 'green', 'blue'];
var greenColor = arrayString[1]; //undefined index
console.log(greenColor)

var string = '10000.5';
var number5 = parseInt(string); //parseInt: ép kiểu số nguyên ,par
console.log(number5);

//Cách khai báo biến : cú pháp (var/let/const + tên biến +dấu = +)
var number = 1;

// các quy tắt tên biến
// Quy tắc 1 : camelCase
// Quy tắc 2: snake_case
// Quy tắc 3: UPPERCASE
// Quy tắc 4: lowercase
// Quy tắc 5: CapitalCase

 // toán tử: + - * // ++ -- ** =
 var a = 2;
 var b = 3;
 var sum = a + b;
 var subtract = a - b;
 var multiple = a * b;
 var divide = a / b;
 var string = 'Đây là số :';
 console.log('Tổng của a + b là :' + sum);
 console.log('Hiệu của a - b là :' + subtract);
 console.log('Tích của a * b là :' + multiple);
 console.log('Thương của a / b là :' + divide);
 console.log(string + a); // nối chuôi

 a = 10;
 sum = a + b;
 console.log('Tổng của a + b là: ' + sum); // kết quả 13

 sum = sum + a; // sum = 13 + 10
 sum = sum + sum;
 console.log(sum);
 sum += sum; // sum = sum + sum
 sum += a; // sum = sum + a
 sum++;
 ++sum;
 var c = 5;
 console.log(a ** b);// lũy thừa a^b
 console.log(a % b);// Phép chia lây dư

  // các toán tử so sánh : <, > 
