import React from 'react';
import Todo from '../models/todo';

type Prop = {
    todo: Todo,
}

const TodoItem: React.FC<Prop> = (props) => {
    return <li>{props.todo.title}</li>
}

export default TodoItem;