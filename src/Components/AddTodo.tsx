import React from "react";
import { AddToDoProps } from "../types";

export const AddToDo = ({
  task,
  handleChange,
  handleSubmitAddTodo,
}: AddToDoProps) => {
  return (
    <form onSubmit={handleSubmitAddTodo}>
      <div className='addTodoLeft'>
        <input
          type='text'
          name='task'
          value={task}
          placeholder='Add new task'
          onChange={handleChange}
        />
      </div>
      <div className='addTodoRight'>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};
