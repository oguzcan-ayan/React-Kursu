/* import React from 'react';
import TodoItem from './item';

export default function TodoList({setTodos, todos, user, setModal}) {
  return (
    <ul>
        {todos.map((todo, key) => <TodoItem key={key} setModal={setModal} setTodos={setTodos} user={user} todo={todo}/>)}
    </ul>
  )
} */





import TodoItem from './item';
import { useSelector } from 'react-redux';

export default function TodoList() {

  const { todos } = useSelector(state => state.todo)

  return (
    <>
    <ul>
        {todos.map((todo, key) => <TodoItem key={key} todo={todo}/>)}
    </ul>
    </>
  )
}






