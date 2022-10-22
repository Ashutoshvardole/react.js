import React from "react";

const ToDoLists = (props) => {


    return (
        <>
            <div className="todo_style">
                {/* <i class="fa-solid fa-xmark"></i> */}
                {/* <i class="fa-solid fa-arrows-to-circle"></i> */}
                {/* <i className="fa-thin fa-xmark" */}
                {/* onClick={props.onSelect} /> */}
                {/* <i class="fa-regular fa-circle-xmark"></i> */}
                {/* <i class="fa fa-times" aria-hidden="true" /> */}
                <li> {props.text} </li>
                <button onClick={() => {
                    props.onSelect(props.id)
                }}>x</button>
            </div>
        </>
    );
};
export default ToDoLists;