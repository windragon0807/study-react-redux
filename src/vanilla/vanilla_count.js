import { createStore } from "redux";

// 버튼 2개 및 span 한 개 HTML 생성
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

/* 데이터를 유일하게 수정할 수 있는 함수 => countModifier
 * countModifier가 외부와 소통할 수 있는 방법 => action
 * countModifier가 return 하는 것 => application의 state
 */
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
};

// subscribe => redux가 변화하는 값을 관찰함
countStore.subscribe(onChange);

const handleAdd = () => {
  // countModifier와 소통할 수 있는 방법은 dispatch를 통해 action을 보내는 것이다.
  // dispatch로 전달하는 action은 반드시 객체 형태이어야 한다.
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
