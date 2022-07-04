import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const myId = useParams().id;
  const toDos = useSelector((state) => state);
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));
  return (
    <>
      {toDo?.text}
      <br />
      Created at: {toDo?.id}
    </>
  );
}

export default Detail;
