
// 2. Nhập vào số n. In ra tất cả các số chẵn từ 0 -> n (Dùng vòng lặp. Điều kiện chia chẵn là: a % 2 === 0)
var a = parseFloat(prompt('Nhập số vào: ' )) 
for (let i = 0; i <= a; i++) {
    if (i % 2 === 0 ) {
        console.log(i);
    } 
}

// bài 1
var f = parseFloat(prompt('Nhập vào điểm: ' )) 
if (f > 0 && f <= 3) {
    console.log('tạch môn');
} else if (f > 3 && f <= 5 ){
    console.log('điểm D');
} else if (f > 5 && f <= 7 ){
    console.log('điểm C');
} else if (f > 7 && f <= 8 ){
    console.log('điểm B');
} else if (f > 8 && f <= 10 ){
    console.log('điểm A');
}else {
    console.log('kiểm tra lại điểm');
}
// if (f <=3){
//     console.log('tạch môn');
// }
// if (f >= 4 && f <= 5) {
//     console.log('điểm D');
// }
// if (f >= 6 && f <= 7) {
//     console.log('điểm C');
// }
// if (f >= 8 && f <= 9) {
//     console.log('điểm B');
// }
// if (f >= 10 && f <= 10) {
//     console.log('điểm A');
// }
// if (f > 10) {
//     console.log('kiểm tra lại điểm');
// }

