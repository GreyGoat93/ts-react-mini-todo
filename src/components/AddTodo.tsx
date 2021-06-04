import React, { useRef, useContext } from "react";
import { TodosContext } from '../store/todoStore';
import Todo from '../models/todo';
import style from '../styles/AddTodo.module.css'

const AddTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const inputRef = useRef<HTMLInputElement>(null);
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = inputRef.current!.value
        if(enteredText.trim().length === 0){
            return;
        }
        todosCtx.addTodo(enteredText);
        inputRef.current!.value = "";
    }

    return (
        <form onSubmit={(e) => submitHandler(e)} className={style.form}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" ref={inputRef} />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodo;