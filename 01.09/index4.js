const root = document.getElementById('root');
// 노드 생성!!
const p = document.createElement('p');
//<p></p>
p.textContent = '반갑습니다.';

p.classList.add('append-p');
//<p class="append-p"> 안녕하세요</p> 상태

p.style.fontWeight = 'bold';

/* <p class="" style ="font-weight:bold"></p> 상태*/
console.log(p);

// ----------------------
//  노드 추가
/*
append(): 노드 객체 또는 텍스트 추가
        - 한번에 여러개의 자식 요소 추가 가능
        - 반환값 없음
appendChild(): 노드 객체만 추가 가능
             - 한번에 하나씩 추가 가능
             - 반환값 있음
prepend(): 첫번째 자식으로 추가
*/

const target = document.getElementById('target');
// root.append(p);
// root.prepend(p);

// target.before(p); // target의 이전형제로 추가
target.after(p); //target의 다음형제로 추가

//노드 삭제
/*
remove(): 선택한 요소를 삭제
removechild(자식노드): 선택한 자식의 요소를 삭제
*/
// target.remove();
root.removeChild(p);

const div = target.parentNode.children;
console.log(div);
root.removeChild(div);
