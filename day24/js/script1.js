function submitForm () {
    let textName = document.getElementById('text-name').value;
    let textEmail = document.getElementById('text-email').value;
    let textSo = document.getElementById('text-number').value;
    let textPassword = document.getElementById('text-password').value;
    let textConfirmpassword = document.getElementById('text-confirmpassword').value;
    let txtEmailError = document.getElementById('txt-email-error')[0];
    let txtPasswordError = document.getElementById('txt-password-error')[0];
} 
if (textName ) 

if (textPassword.length === 0) {
    txtPasswordError.innerHTML = '*Không được bỏ trống textPassword';
    error = true;
}
if (textPassword.length > 0 && textPassword < 6){
    txtPasswordError.innerHTML = '* password lớn hơn 6 ký tự';
    error = true;
}