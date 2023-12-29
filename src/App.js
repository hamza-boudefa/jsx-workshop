import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import {Data} from './Data'

function App() {
  const [todos, setTodos] = useState(Data)

  const addTodoFunction=(newTodo)=>{
    setTodos([...todos,{text:newTodo}])
  }



  return (
    <div className="App">
    <AddTodo addTodoFunction={addTodoFunction} />
    <Todo Data={todos} />
    </div>
  );
}

export default App;
