import React, { FormEvent, ReactEventHandler, useState } from "react";

const AddTodo: React.FC = () => {

    const [title, setTitle] = useState("");

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodo;