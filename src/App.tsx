import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
  const [todos, setTodos] = useState([
    new Todo("Get a job."),
    new Todo("Get a fucking job"),
    new Todo("Get a job, sir"),
  ]);

  return (
    <div>
      <AddTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
