//조건문 [switch]

/*
switch() {     //case,dafault는 클론, break는 새미클론
    case 값:    //  x === 값1
        break;
    case 값:    //  x === 값2
        break;
    default:    // 값1,2 둘다 아니면.
        break;
    }                      
break: 조건문, 반복문에서 빠져나갈대 사용하는 키워드
    */

let a = 2 * 2;
switch (a) {
    case 3:
        console.log('현재 값은 3 입니다.');
        break;
    case 4:
        console.log('현재 값은 4 입니다.');
        break;
    case 5:
        console.log('현재 값은 5 입니다.');
        break;
    default:
        console.log('알수없는 값입니다.');
        break; // 안넣어도 상관없다.
}

let grade = 'F';
switch (grade) {
    case 'A':
        console.log('학점 A');
        break;
    case 'B':
        console.log('학점 B');
        break;
    case 'C':
        console.log('학점 C');
        break;
    case 'D':
        console.log('학점 D');
        break;
    case 'F':
        console.log('학점 F');
        break;
    default:
        console.log('알수없는 값입니다.');
}
