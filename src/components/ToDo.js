import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, id }) {
  const dispatch = useDispatch();
  const onBtnClick = () => {
    dispatch(remove(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

export default ToDo;
