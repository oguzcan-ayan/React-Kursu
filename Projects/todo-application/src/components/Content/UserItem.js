import React from 'react';
import { useTodo } from '../../contexts/TodoContext';

function UserItem({ todo }) {

   /*  const { todos, setTodos } = useTodo(); */
   /*  const { todos, setTodos, toggleTodo } = useTodo();  */
    const {toggleTodo, destroyTodo} = useTodo(); 
    const onChange = (id) => {
       /*  const cloned_todos = [...todos];
        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
        const item = todos[itemIndex];
        item.completed = !item.completed;

        setTodos(cloned_todos); */

        toggleTodo(id);
    }

    const onDestroy = (id) =>{
     /*    const cloned_todos = [...todos];
        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
        cloned_todos.splice(itemIndex, 1);
        
        setTodos(cloned_todos); */

        destroyTodo(id);
    }

  return (
    <>
     <li className={todo.completed ? "completed" : ""}>
	    <div className="view">
			<input className="toggle" type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)} />
			<label>{todo.text}</label>
			<button className="destroy" onClick={() => onDestroy(todo.id)}></button>
		</div>
	</li>
    </>
  )
}

export default UserItem;