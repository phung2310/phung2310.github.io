function submitForm () {
    let textEmail = document.getElementById('text-email').value;
    let textPassword = document.getElementById('text-password').value;
    let txtEmailError = document.getElementById('txt-email-error')[0];
    let txtPasswordError = document.getElementById('txt-password-error')[0];
    if (textEmail.length === 0){
        txtEmailError.innerHTML = '*Không được để trống email';
        error = true;
    }
    if (textPassword.length === 0) {
        txtPasswordError.innerHTML = '*Không được bỏ trống textPassword';
        error = true;
    }
    if (!textEmail.includes('@') && textEmail.length > 0) {
        txtEmailError.innerHTML='* Email sai định dạng ';
        error = true;
    }
    if (textPassword.length > 0 && textPassword < 6){
        txtPasswordError.innerHTML = '* password lớn hơn 6 ký tự';
        error = true;
    }
    if (error === false){
        txtEmailError.innerHTML = '';
        txtPasswordError.innerHTML = '';
        setTimeout(alertSuccess, 1000);
    }
}
 
function alertSuccess () {
    alert ('Đăng nhập thành công')
}