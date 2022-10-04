import { ChangeEvent, ChangeEventHandler, FormEvent, MouseEvent } from "react";

export type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

export type RowProps = {
  todo: Todo;
  handleCheckTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export type AddToDoProps = {
  task: string;
  handleChange: (e: ChangeEvent<HTMLElement>) => void;
  handleSubmitAddTodo: (e: FormEvent<HTMLElement>) => void;
};

export const data = [
  {
    id: "0",
    title: "Task 1",
    task: "Do laundry 1",
    isCompleted: false,
  },
  {
    id: "1",
    title: "Task 2",
    task: "Do laundry 2",
    isCompleted: false,
  },
  {
    id: "2",
    title: "Task 2",
    task: "Do laundry 3",
    isCompleted: false,
  },
];
