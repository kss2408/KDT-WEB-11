//  데이터를 받아서 저장하고 보여주는 js

function registerUser() {
    var username = $('#username').val();
    var email = $('#email').val();
    var phonenumber = $('#phonenumber').val();
    var money = $('#money').val();

    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    var newUser = { username: username, email: email, phonenumber: phonenumber, money: money };
    existingUsers.push(newUser);

    localStorage.setItem('users', JSON.stringify(existingUsers));
    /* 
    localStorage.getItem('users'): 이 메서드는 로컬 스토리지에서 'users'라는 키에 해당하는 값을 가져오기. 
    만약 해당 키에 데이터가 없으면 null을 반환.
    JSON.parse(...): 가져온 데이터가 문자열 형태,이를 JavaScript 객체로 변환하기 위해 JSON.parse()를 사용. 
    만약 'users' 키에 저장된 데이터가 없으면 null이 반환.

    || []: 만약 'users' 키에 저장된 데이터가 null이나 undefined일 경우, 빈 배열([])을 할당. 
    이렇게 함으로써 변수 existingUsers는 로컬 스토리지에서 'users' 키에 저장된 배열 데이터를 가져오거나, 
    만약 없으면 빈 배열을 가지게 된다.
    */

    location.reload(); // 페이지 새로고침

    alert('후원이 완료되었습니다.');
    $('#donateForm')[0].reset();
}

//고찰 : 잘못입력됬을때의 데이터를 받지않는 코드를 추가했다면 어땠을까?

function loginUser() {
    var loginEmail = $('#loginEmail').val();
    var loginPassword = $('#loginPassword').val();

    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // 입력된 이메일과 비밀번호를 가진 회원이 있는지 확인
    var loggedInUser = existingUsers.find(function (user) {
        return user.email === loginEmail && user.password === loginPassword;
    });

    if (loggedInUser) {
        alert('로그인 성공!' + loggedInUser.name + '님.');
        // 로그인 성공 시 추가 작업을 수행할 수 있습니다.
    } else {
        alert('이메일 또는 비밀번호가 일치하지 않습니다.');
    }

    $('#loginForm')[0].reset();

    location.reload();
}
