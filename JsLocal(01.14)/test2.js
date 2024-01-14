const idElement = document.getElementById('id');
const pwdElement = document.getElementById('pwd');
const loginButton = document.getElementById('login-btn');
const userIdElement = document.getElementById('userId');
const userPwdElement = document.getElementById('userPwd');

//JSON문자열은 JSON.pares()를 사용해 값을 객체로 변환할 수 있습니다.
const userLoginInfo = JSON.parse(localStorage.getItem('userInfo'));
console.log(userLoginInfo);

userIdElement.textContent = `아이디 : ${userLoginInfo.id}`;
userPwdElement.textContent = `비밀번호 : ${userLoginInfo.pwd}`;

loginButton.addEventListener('click', () => {
    let userInfo = { id: idElement.value, pwd: pwdElement.value };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
});
