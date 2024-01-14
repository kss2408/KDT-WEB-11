let Name = document.getElementById('name');
let P_num = document.getElementById('p-num');
let C_num = document.getElementById('card-num');

let Btn = document.getElementById('btn');

Btn.addEventListener('click', () => {
    console.log(Name.value);
    console.log(P_num.value);
    console.log(C_num.value);
    // localStorage.setItem();   설명: setItem은 2개의 매개변수를 갖는다
    // localStorage.setItem("key",value);  형태.
    // 로컬스토리지에 값을 저장할때에는 setItem을 사용.

    localStorage.setItem('name', JSON.stringify(Name.value));
    localStorage.setItem('P_num', JSON.stringify(P_num));
    localStorage.setItem('C_num', C_num);

    // let userInFo = { name : Name.value ,  }
});

/*
// 보는법: 검사 콘솔탭 -> 어플리케이션탭으로 이동, 로컬스토리지 보면 매개변수 저장되있는거 확인.

let userInfo = { id: idElement.value, pwd: pwdElement.value };

//, 만약 객체 혹은 배열 형태의 데이터를 저장한다면, 항상 JSON.stringify를 사용해 저장할 데이터를 JSON 문자열로 변경해주어야한다
localStorage.setItem('userInfo', JSON.stringify(userInfo));
*/
