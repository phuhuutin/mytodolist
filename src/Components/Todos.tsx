import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { data, Todo } from "../types";
import { Row } from "./Row";
import "../App.css";
import { AddToDo } from "./AddTodo";
export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(data);
  const [task, setTask] = useState("");

  const handleChange = (e: ChangeEvent<HTMLElement>): void => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };
  const handleAddTodo = (todo: Todo): void => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTask("");
  };
  const handleSubmitAddTodo = (e: FormEvent<HTMLElement>): void => {
    e.preventDefault();
    const todo = {
      id: uuidv4(),
      task: task,
      isCompleted: false,
    };
    task && handleAddTodo(todo);
  };

  const handleCheckTodo = (id: string): void => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: string): void => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='toDo'>
      <div className='addTodo'>
        <AddToDo
          task={task}
          handleChange={handleChange}
          handleSubmitAddTodo={handleSubmitAddTodo}
        />
      </div>
      <div className='showList'>
        {todos.map((todo) => (
          <Row
            todo={todo}
            handleCheckTodo={handleCheckTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </div>
      1
    </div>
  );
};
