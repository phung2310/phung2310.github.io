// let x1; let x2; let delta;

// if (a === 0) {
//     if (b ===0) {
//         if (c ===0) { //a === b === c === 0
//             console.log('phương trình nghiệm!');
//         } else { // a === b === 0 =#
//             console.log('phương trình vô nghiệm');
//         }
//     } else { // a === 0; b =#
//         console.log('phương trình có nghiệm duy nhất là: ' +(-c / b));
//     }
// } else {
//     let dalta = (b ** 2) - (4 * a * c);
//     if (dalta < 0) {
//         console.log('phương trình có nghiệm ảo. ');
//     }
// }
// var a = 1 * 8;
// console.log(a)
// var fullName = 'Phung';
function onChangeEmail(){
    let email = document.getElementById('email').value;
    console.log(email);

    return email;
}
function onChangeUserName(){
    let userName = document.getElementById('username').value;
    console.log(userName);

    return userName;
}
function handleSumbimt() {
    let email = onChangeEmail();
    let userName = onChangeUserName();
    //str.length = đém số
    //str.split = tách chữ
    //str.toUpperCase : viết hoa tất cả
    //str.toLowerCase : viets thường
    //str.trim : bỏ khoảng trắng đầu cuối
    if (email.length > 0) {
        document.getElementById('email-value').innerHTML = '<h1>Email vừa nhập là:' + email + '</h1>';
    }
    if (userName.length > 0) {
        document.getElementById('usernam-value').innerHTML = '<h1>Tên vừa nhập là:' + userName + '</h1>'
    }

}
function handlRemove() {
    document.getElementById('email-avlue')
}