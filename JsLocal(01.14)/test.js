const idElement = document.getElementById('id');
const pwdElement = document.getElementById('pwd');
const loginButton = document.getElementById('login-btn');

loginButton.addEventListener('click', () => {
    console.log(idElement.value);
    console.log(pwdElement.value);
});

// 로컬 스토리지는 localStorage 객체를 사용해 데이터를 저장할수있따.
// 로컬 스토리지는 사용자의 로컬 컴퓨터에 데이터를 영구적으로 저장한다. 유효기간이없다.
// 로컬 스토리지는 도메인만 같으면 동일한 데이터를 공유한다.

loginButton.addEventListener('click', () => {
    // localStorage.setItem();   설명: setItem은 2개의 매개변수를 갖는다
    // localStorage.setItem("key",value);  형태.
    // 로컬스토리지에 값을 저장할때에는 setItem을 사용.

    localStorage.setItem('id', idElement);
    localStorage.setItem('pwd', pwdElement);

    // 보는법: 검사 콘솔탭 -> 어플리케이션탭으로 이동, 로컬스토리지 보면 매개변수 저장되있는거 확인.

    let userInfo = { id: idElement.value, pwd: pwdElement.value };

    //, 만약 객체 혹은 배열 형태의 데이터를 저장한다면, 항상 JSON.stringify를 사용해 저장할 데이터를 JSON 문자열로 변경해주어야한다
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
});

//삭제 => remoteItem("key")  초기화 => claar

//localStorage.removeItem('id');
//localStorage.clear();

//LocalStorage에서 불러오는법 = getItem
