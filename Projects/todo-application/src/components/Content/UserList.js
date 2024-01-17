import React from 'react';
import { useTodo } from '../../contexts/TodoContext';
import UserItem from './UserItem';

function UserList() {

    const {todos, filter} = useTodo();
    let filtered = null;

    filtered = [...todos];

    if(filter !== "all"){
      filtered = todos.filter(todo => 
        filter === "active" 
        ? todo.completed === false
        : todo.completed === true);
    }

  return (
    <>
    <ul className="todo-list">
        {
			filtered.map(todo => (
              <UserItem key={todo.id} todo={todo}/>
            ))
        }
		</ul>
    </>
  )
}

export default UserList;