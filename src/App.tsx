import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos'
import TodosContextProvider from './store/todoStore'

function App() {
  return (
    <TodosContextProvider>
      <div>
        <AddTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
