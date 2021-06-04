import React from 'react';
import Todo from '../models/todo';
import style from '../styles/TodoItem.module.css'

type Prop = {
    todo: Todo,
    removeTodo: (todoId: string) => void
}

const TodoItem: React.FC<Prop> = (props) => {
    const handleClick = (event: React.MouseEvent, todoId: string) => {
        event.preventDefault();
        props.removeTodo(todoId);
    }

    return <li className={style.item} onClick={(e) => handleClick(e, props.todo.id)}>{props.todo.title}</li>    
}

export default TodoItem;