import React from 'react';
import Todo from '../models/todo'
import TodoItem from './TodoItem';

type Prop = {
    todos: Todo[]
}

const Todos: React.FC<Prop> = (props) => {
    return (
        <ul>
            {props.todos.map((todo: any) => {
                return <TodoItem todo={todo} key={todo.id} />
            })}
        </ul>
    )
}

export default Todos;