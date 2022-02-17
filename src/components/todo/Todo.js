import TodoList from "../todo-list/TodoList";
import TodoCreate from "../todo-create/TodoCreate";
import { useState } from "react";
import './Todo.css'

const Todo = () => {

    const [getTodos, setTodos] = useState([
        { id: 1, title: 'Eat' },
        { id: 2, title: 'Sleep' },
        { id: 3, title: 'Code' }
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }

    return(
        <div>
            <p>Input List Baru</p>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodos} />
        </div>
    )
}
export default Todo