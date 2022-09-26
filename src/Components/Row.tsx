import React from "react";
import { RowProp, Todo } from "../types";
export const Row = ({
   todo:{id, task, isCompleted}


}:RowProp)=>{

    return(
        <div className="rowContainer">
            <div className="rowLeft">
                <p>{task}</p>
            </div>
            <div className="rowRight">
                <input 
                    type="checkbox"
                    checked={isCompleted}
                />
                <button
                    onClick={()=>{}}
                >X</button>
            </div>
        </div>
    )
}