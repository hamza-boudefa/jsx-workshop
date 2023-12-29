import React from "react";
import { Button, Toast } from "react-bootstrap";
import AddTodo from "./AddTodo";

const Todo = ({ Data }) => {
  return (
    <div className="todo" >
      {Data.map((todo) => (
        <Toast>
          <Toast.Body>{todo.text}</Toast.Body>
        </Toast>
        
      ))}
    </div>
  );
};

export default Todo;
