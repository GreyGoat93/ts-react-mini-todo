import React, {useState} from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
    items: Todo[],
    addTodo: (todoTitle: string) => void,
    removeTodo: (todoId: string) => void,
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: (todoTitle) => {},
    removeTodo: (todoId) => {},
})

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (todoTitle: string) => {
        setTodos((prevState) => [...prevState, new Todo(todoTitle)]);
    }

    const removeTodo = (todoId: string) => {
        setTodos((prevState) => prevState.filter(pre => pre.id !== todoId));
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodo,
        removeTodo: removeTodo,
    }

    return (<TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>)
}

export default TodosContextProvider;