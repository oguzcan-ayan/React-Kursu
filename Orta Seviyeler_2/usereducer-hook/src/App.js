import React from 'react';
import './App.css';
import { /* useState, */ useReducer } from 'react';
import todoReducer from './reducers/todoReducer';

function App() {

  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: ''
  });

  /* const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState(''); */
  
  const submitHandle = (e) => {
    e.preventDefault();
    /* setTodos([...todos, todo]);
    setTodo(''); */
    dispatch({
      type: 'ADD_TODO',
      todo: state.todo
    })
  };

  const handleChange = (e) => {
    dispatch({
      type: 'SET_TODO',
      value: e.target.value
    })
  };

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={submitHandle}>
        <input type='text' value={state.todo} /* onChange={(e) => setTodo(e.target.value)} */ onChange={handleChange}/>
        <button disabled={!state.todo} type='submit'>Add Todo</button>
      </form>
      <ul>
        {state.todos.map((todo, index) => {
            return( 
            <li key={index}>{todo}</li>
            )
        })}
      </ul>
    </>
  );
}

export default App;
