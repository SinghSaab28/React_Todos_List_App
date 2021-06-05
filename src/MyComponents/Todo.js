import React from "react";

export const Todo = (props) => {
  let todoStyles = {
    marginTop: "10px",
  };

  return (
    <>
      <div style={todoStyles}>
        <h4>{props.todo.title}</h4>
        <p>{props.todo.description}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            props.onDelete(props.todo);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};
