/* import { useState } from "react";
import { nanoid } from 'nanoid';

export default function AddTodo({setTodos, user}) {

    const [todo, setTodo] = useState('');
    const submitHandle = e => {
        e.preventDefault();
        setTodos(todos => [{
            title: todo,
            done: false,
            id: nanoid(),
            user: user.id //add member who log in to the todo app 
    }, ...todos])
        setTodo('');
    }

  return (
    <form onSubmit={submitHandle}>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder="Write something to do..."></input>
        <button disabled={!todo || !user} type="submit">Create</button>
    </form>
  )
} */




import { useState } from "react";
import { nanoid } from 'nanoid';
/* import { addTodo } from "../stores/todo"; */
import { /* useDispatch, */ useSelector } from 'react-redux';
import { addTodoHandle } from "../utils";

export default function AddTodo() {

    const { user } = useSelector(state => state.auth);
    /* const dispatch = useDispatch(); */
    const [todo, setTodo] = useState('');
   /*  const submitHandle = e => {
        e.preventDefault();
        dispatch(addTodo({
          title: todo,
            done: false,
            id: nanoid(),
            user: user.id //add member who log in to the todo app 
        }))
        setTodo('');
    } */
    const submitHandle = e => {
        e.preventDefault();
        addTodoHandle({
          title: todo,
            done: false,
            id: nanoid(),
            user: user.id //add member who log in to the todo app 
        })
        setTodo('');
    }

  return (
    <form onSubmit={submitHandle}>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder="Write something to do..."></input>
        <button disabled={!todo || !user} type="submit">Create</button>
    </form>
  )
}





