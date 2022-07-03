import { createStore } from "redux"

// 버튼 2개 및 span 한 개 HTML 생성
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';
// * 데이터를 수정할 수 있는 유일한 곳 = countModifier, 그리고 이와 외부에서 소통할 수 있는 것이 필요
//   -> action : countModifier와 소통할 수 있는 방법
// # countModifier가 return 하는 것은 application의 state가 된다.
const countModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
};

// store :: 데이터를 넣을 수 있는 장소를 생성
const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
}

// subscribe :: redux가 값을 관찰함
countStore.subscribe(onChange);

const handleAdd = () => {
    // dispatch를 통해 countModifier에게 메시지를 보냄
    // * countModifier와 소통할 수 있는 방법은 dispatch를 통해 action을 보내는 것이다.
    countStore.dispatch({ type: ADD });
    // dispatch로 전달하는 action은 반드시 객체 형태이어야 한다.
    // 또한, action은 type이 필요한데, type 이름을 변경할 수 없다.
}

const handleMinus = () => {
    countStore.dispatch({ type: MINUS });
}

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);