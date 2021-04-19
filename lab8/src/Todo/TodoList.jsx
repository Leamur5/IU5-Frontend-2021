import React from 'react';
import TodoItem from "./TodoItem";
import './TodoList.css';

export default function TodoList(props) {
    return ( <ul className="todolist">
    {props.todos.map((todo, index) =>{
    return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle} /> 
    })}
        

    </ul> );
}