import React from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useState } from "react";

const AddTodo = ({ addTodoFunction }) => {
  // modal show/ hide
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  // add todo
  const [input, setInput] = useState("");
  const addTodo = () => {
    addTodoFunction(input);
    toggle();
  };

  return (
    <div>
      <Button variant="primary" onClick={toggle}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={toggle}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>add new task here</Form.Label>
              <Form.Control
                onChange={(e) => setInput(e.target.value)}
                type="text"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggle}>
            Close
          </Button>
          <Button variant="primary" onClick={addTodo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddTodo;
