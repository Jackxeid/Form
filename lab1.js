// Khai báo biến
const content = document.getElementById('content');
let username = document.getElementById('username');
let pass = document.getElementById('password');
let eye = document.getElementById('eye');

// Tương tác

eye.addEventListener('click', function(){
    if (pass.type == 'password'){
        pass.type = 'text';
        eye.src = 'images/eye-open.png';
    }
    else{
        pass.type = 'password';
        eye.src = 'images/eye-close.png';
    }
})


content.addEventListener('submit', e => {

    e.preventDefault();

    validateInput();
});


const setError = (element, message) => {
    const box = element.parentElement;
    const errordisplay = box.querySelector('.error');

    errordisplay.innerText = message;
    box.classList.add('error');
};

const setSuccess = element => {
    const box = element.parentElement;
    const errordisplay = box.querySelector('.error');

    errordisplay.innerText = '';
    box.classList.remove('error');
}


const validateInput = () => {


// Khai báo biến phụ
let usernamevalue = username.value;
let passvalue = pass.value;

    if (usernamevalue === ''){
        setError(username, '*Vui lòng nhập tên người dùng');
    }
    else{
        setSuccess(username);
    }

    if (passvalue === ''){
        setError(pass, '*Vui lòng nhập mật khẩu');
    }
    else if (passvalue.length < 6){
        setError(pass, '*Mật khẩu phải chứa tối thiểu 6 kí tự')
    }
    else{
        setSuccess(pass);
    }
};