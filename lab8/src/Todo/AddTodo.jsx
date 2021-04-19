import React, {useState} from 'react';
import './AddTodo.css';

function AddTodo({onCreate}){
    const [value, setValue] = useState('');

    function SubmitHandler(event){
        event.preventDefault();
        if(value.trim()){
            onCreate(value);
            setValue('');
        }
    }

    return(
    <form className="addTodoForm" onSubmit={SubmitHandler}>
        <input value={value} onChange={event => setValue(event.target.value)} />
        <button type="submit" className="addTodoButton">Add todo</button>
    </form>
    )
}

export default AddTodo