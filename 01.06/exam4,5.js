const age = Number(prompt('나이를 입력하세요'));
const gender = prompt('성별을 입력하세요(남자 or 여자)');
const man = '남자';
const woman = '여자';

if (age >= 20) {
    if (gender === man) {
        console.log('성인 남성입니다.');
    } else if (gender === woman) {
        console.log('성인 여성입니다.');
    } else {
        console.log('성별을 잘못 입력하셨습니다.');
    }
} else if (age >= 17) {
    if (gender === man) {
        console.log('남고생입니다.');
    } else if (gender === woman) {
        console.log('여고생입니다.');
    } else {
        console.log('성별을 잘못 입력하셨습니다.');
    }
} else if (age >= 14) {
    if (gender === man) {
        console.log('남자 중학생입니다.');
    } else if (gender === woman) {
        console.log('여자 중학생입니다.');
    } else {
        console.log('성별을 잘못 입력하셨습니다.');
    }
} else if (age >= 8) {
    if (gender === man) {
        console.log('남초딩입니다.');
    } else if (gender === woman) {
        console.log('여초딩입니다.');
    } else {
        console.log('성별을 잘못 입력하셨습니다.');
    }
} else if (age >= 0) {
    if (gender === man) {
        console.log('남아입니다.');
    } else if (gender === woman) {
        console.log('여아입니다.');
    } else {
        console.log('잘못된 정보를 입력하셨습니다.');
    }
} else {
    console.log('나이 정보를 잘못 입력했습니다.'); //else안에는 조건들어가면 안된다.
}

// if (age >= 20 ) {
//     console.log('성인');
// } else if ( age >= 17 ) {
//     console.log('고등학생'); }

// else if ( age >= 14) {
//     console.log('중학생') ;
// } else if ( age >= 8) {
//     console.log('초등학생') ;
//  } else {
//     console.log('유아') ;
//  }
