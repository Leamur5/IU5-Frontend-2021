import React from 'react';
import TodoList from "./Todo/TodoList.jsx";
import Context from "./context";
import AddTodo from "./Todo/AddTodo.jsx";

function App() {
    const [todos, setTodos] = React.useState([]);

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) { todo.completed = !todo.completed }
            return todo;
        }))
    }

    function editTodo(id, newTitle) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.title = newTitle;
                }
                return todo;
            })
        );
    }

    function createTodo(title) {
        setTodos(
            todos.concat([{
                title,
                id: Date.now(),
                completed: false,
            }, ])
        );
    }


    function removeTodo(id) { setTodos(todos.filter(todo => todo.id !== id)) }

    return ( <Context.Provider value = {{ removeTodo, editTodo }} >
        <div className = "wrapper" >
        <h1> To - do list </h1>

        <AddTodo onCreate = { createTodo } />  {
        todos.length ? < TodoList todos = { todos }
        onToggle = { toggleTodo } /> : <p>Nothing to do (Chill)</p >
    }

    </div>  </Context.Provider>
);
}

export default App