//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { v4 as uuid } from "uuid";

function App() {

  const [todo , setTodo] = useState('');
  const [todoList , setTodoList] = useState([]);

  const onTodoInputChange = (e) => {
    setTodo(e.target.value);
  }
  const onAddTodoClick = () => {
    setTodoList([...todoList, {id: uuid(), todo: todo , isCompleted: false}]);
    setTodo('');
  }
  const onDeleteClick = (id) =>{
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  }
  const onTodoCheckChange = (id) => {
    const updatedTodoList = todoList.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodoList(updatedTodoList);
  }

  return (
   <div className='APP'>
    <h1> MY WISHLIST </h1>
    <div>
      <input value={todo} onChange={onTodoInputChange} placeholder='ADD YOUR WISHLIST HERE' />
      {/* here we have created a input field , onChange is the eventListener here */}
      <button onClick={onAddTodoClick}>ADD</button>
    </div>
    <div>
      {
       todoList?.length > 0 && todoList.map(todo => (
        <div key={todo.id}>
          <label>
           <input
             onChange={() => onTodoCheckChange(todo.id)}
             type='checkbox'
             checked={todo.isCompleted}
           />
           <span className={todo.isCompleted ? 'strike-through' : ''}>{todo.todo}</span>
          </label>
          <button onClick={() => onDeleteClick(todo.id)}>DELETE</button>
        </div>
       ))
      }
    </div>
   </div>
  );
}

export default App;
