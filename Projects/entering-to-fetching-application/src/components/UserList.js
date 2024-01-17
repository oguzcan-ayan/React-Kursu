import React, {useEffect, useState} from 'react';
import axios from 'axios';

function UserList( {setActiveUserId} ) {

    const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
        .finally(() => setLoading(false))
    }, [])

  return (
    <>
    <div>
        <h2>Users</h2>
        {loading && <div>Loading...</div>}
    </div>

    <ul className='userList'>
        {
            users.map((user) => (
                <li key={user.id} onClick={() => setActiveUserId(user.id)}>{user.name}</li>
            ))
        } 
    </ul>
    </>
  )
}

export default UserList;





