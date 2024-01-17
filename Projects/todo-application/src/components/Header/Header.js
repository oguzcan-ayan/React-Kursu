import React from 'react';
import TodoForm from './ToDoFormOperations/TodoForm';

function Header() {
  return (
    <>
    <header className="header">
		<h1>todos</h1>
    <TodoForm />
	</header>
    </>
  )
}

export default Header;