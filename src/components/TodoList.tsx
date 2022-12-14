
import React from 'react';
import './style.css';
import { todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    todos: todo[];
    setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
}
const TodoList = ({ todos, setTodos }: Props) => {
    return (
        <div className='todos'>
            {
                todos.map((todo) => (
                    <SingleTodo todo={todo} key={todo.id} 
                    todos={todos}
                    setTodos={setTodos}
                    />
            ))}
        </div>
    )
}

export default TodoList;
