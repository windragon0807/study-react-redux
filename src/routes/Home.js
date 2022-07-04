import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home() {
  const toDos = useSelector((state) => state); // store state에 접근
  const dispatch = useDispatch(); // store dispatch(action)에 접근

  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault(); // submit 시, 페이지 새로고침되는 현상을 막아줌
    dispatch(add(text));
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {/* toDos => [{text: 'a', id: Date.now()}, {text: 'b', id: Date.now()}, ...}] */}
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

export default Home;
