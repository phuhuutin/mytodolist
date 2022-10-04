import React from "react";
import { RowProps, Todo } from "../types";
export const Row = ({
  todo: { id, task, isCompleted },
  handleCheckTodo,
  handleDeleteTodo,
}: RowProps) => {
  return (
    <div className='rowContainer'>
      <div className='rowLeft'>
        <p>{task}</p>
      </div>
      <div className='rowRight'>
        <input
          type='checkbox'
          checked={isCompleted}
          onChange={() => {
            handleCheckTodo(id);
          }}
        />
        <button
          onClick={() => {
            handleDeleteTodo(id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
