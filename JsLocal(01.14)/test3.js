let Name = document.getElementById('name');
let P_num = document.getElementById('p-num');
let C_num = document.getElementById('card-num');

let Btn = document.getElementById('btn');

let Money = document.getElementById('money');

Btn.addEventListener('click', () => {
    //button 형식이 submit일경우 확인이 안된다.
    console.log(Name.value);
    console.log(P_num.value);
    console.log(C_num.value);
    // localStorage.setItem();   설명: setItem은 2개의 매개변수를 갖는다
    // localStorage.setItem("key",value);  형태.
    // 로컬스토리지에 값을 저장할때에는 setItem을 사용.

    localStorage.setItem('name', JSON.stringify(Name.value));
    localStorage.setItem('P_num', JSON.stringify(P_num));
    localStorage.setItem('C_num', C_num);

    localStorage.setItem('Money', JSON.stringify(Money.value));

    // let userInFo = { name : Name.value ,  }-> 하다만것. 나중에생각
});

/*
// 보는법: 검사 콘솔탭 -> 어플리케이션탭으로 이동, 로컬스토리지 보면 매개변수 저장되있는거 확인.

let userInfo = { id: idElement.value, pwd: pwdElement.value };

//, 만약 객체 혹은 배열 형태의 데이터를 저장한다면, 항상 JSON.stringify를 사용해 저장할 데이터를 JSON 문자열로 변경해주어야한다
localStorage.setItem('userInfo', JSON.stringify(userInfo));
*/

/*----------------------------------------------------------------*/
// JSON.parse를 사용해 localStorage에서 가져온 데이터를 객체로 변환

let C_Btn = document.getElementById('c_btn');
let Name2 = JSON.parse(localStorage.getItem('name'));
let C_p_num = localStorage.getItem('P_num');
let C_c_num = localStorage.getItem('C_num');
let C_money = JSON.parse(localStorage.getItem('Money'));

//버튼, 이름과 후원금 제외 나머지 실험.

let C_Name = document.getElementById('check_name');

let resultDisplay = document.getElementById('result');

C_Btn.addEventListener('click', () => {
    console.log(Name2);
    console.log(C_p_num);
    console.log(C_c_num);
    console.log(C_Name.value);

    if (Name2 === C_Name.value) {
        console.log(Name2);
        resultDisplay.textContent = `당신의 후원금입니다 : ` + C_money;
    } else {
        resultDisplay.textContent = '잘못입력하셨습니다.';
    }
});
