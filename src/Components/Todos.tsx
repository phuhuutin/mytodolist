import React, { useState } from "react";
import { data, Todo } from "../types";
import { Row } from "./Row";
import '../App.css'; 
export const Todos = () =>{

    const [todos,setTodos] = useState<Todo[]>(data);

    return(
        <div className="toDo">
            <div>
               Adding new list here
            </div>
            <div className="showList">
                {todos.map((todo)=>(
                    <Row todo={todo} />

                )
                
                )}
            </div>
        </div>
    )
}