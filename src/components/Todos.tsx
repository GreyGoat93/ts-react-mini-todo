import React, { useContext } from 'react';
import { TodosContext } from '../store/todoStore';
import TodoItem from './TodoItem';
import style from '../styles/Todos.module.css'

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    return (
        <ul className={style.todos}>
            {todosCtx.items.map((todo: any) => {
                return <TodoItem todo={todo} key={todo.id} removeTodo={todosCtx.removeTodo}/>
            })}
        </ul>
    )
}

export default Todos;