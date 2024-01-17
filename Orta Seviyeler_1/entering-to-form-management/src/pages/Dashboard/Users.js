import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])

  /* const abc = () => {
    console.log(text);
  }

  const [text, setText] = useState("ali"); */

  return (
    <>
    <h2>Users</h2>
{/* 
    <button type='button' onClick={abc}>Tıkla</button>

    <input type='text' onChange={(e) => setText(e.currentTarget.value)} value={text}></input> */}
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>
              <Link to={`${user.id}`} state={user}>{user.name}</Link>
            </li>
          ))  
        }
      </ul>
    </>
  )
}

export default Users;