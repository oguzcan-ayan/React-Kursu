/* import React from 'react';

export default function TodoItem({setTodos, todo, user, setModal}) {
    const deleteHandle = () => {
        //todoDelete
        setTodos(todos => todos.filter(t => t.id !== todo.id))
    }

    const editHandle = () => {
        //todoEdit
        setModal({
            name: 'edit-todo',
            data: todo 
    })
    }

  return (
        <li>
            <span style={{textDecoration: todo.done ? 'line-through' : false}}>
                {todo.title} - {todo.user}
            </span>

            {todo.user === user.id && (
                <>
                <button onClick={editHandle}>Edit</button>
                <button onClick={deleteHandle}>Delete</button>
                </>
            )}
        </li>
  )
} */




import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../stores/todo';
/* import { openModal } from '../stores/modal'; */
import { modal } from '../utils';

export default function TodoItem({ todo }) {

    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const deleteHandle = () => {
        //todoDelete
        dispatch(deleteTodo(todo.id));
    }

  /*   const editHandle = () => {
        //todoEdit
        dispatch(openModal({
            name: 'edit-todo',
            data: todo 
    }))
    } */
    const editHandle = () => {
        //todoEdit
        modal('edit-todo', todo)
    }

  return (
        <li>
            <span style={{textDecoration: todo.done ? 'line-through' : false}}>
                {todo.title} - {todo.user}
            </span>

            {todo.user === user.id && (
                <>
                <button onClick={editHandle}>Edit</button>
                <button onClick={deleteHandle}>Delete</button>
                </>
            )}
        </li>
  )
}







