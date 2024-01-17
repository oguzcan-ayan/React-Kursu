import axios from 'axios';
import React, {useState, useEffect} from 'react';

function UserDetail( {activeUserId} ) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
        .then(response => setUser(response.data))
        .finally(() => setLoading(false))
    }, [activeUserId])

  return (
    <>
    <h2>User Details</h2>
    
    {
        loading && <div>Loading...</div>
    }
    <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}

export default UserDetail;