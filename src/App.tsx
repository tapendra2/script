import React, { useState } from 'react';
import './App.css';
import InpuField from './components/InpuField';
import { todo } from './model';
import  TodoList  from './components/TodoList';

const App:React.FC =()=> {

  const [todo , setTodo] = useState<string>("");
  const [todos , setTodos] = useState<todo[]>([]);

  const handleAdd =(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos , {id: Date.now() ,todo , isDone:false}]);
      setTodo("");
    }
  }
  console.log(todo)
  console.log(todos);
  return (
    <div className="App">
     <span className='heading'> Taskify</span>
     <InpuField todo={todo} setTodo = {setTodo} handleAdd={handleAdd}/>
     <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;