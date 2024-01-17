import React, {useState, useEffect} from 'react';
import { Link, useParams, useLocation} from 'react-router-dom';

function UserDetail() {

  const location = useLocation();
  const [user, setUser] = useState(location.state);
  const { id } = useParams();

/*   console.log(location);
  console.log(location.state); */

  useEffect(() => {

    if(!user?.id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => setUser(data))
    }
  }, [id, user])

  return (
    <>
    <h2>
      User Detail
    </h2>

    {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
   {/* {location.state && <pre>{JSON.stringify(location.state, null, 2)}</pre>} */}
   
    <Link to={`/users/${Number(id) + 1}`}>Next User</Link>
    </>
  )
}

export default UserDetail;