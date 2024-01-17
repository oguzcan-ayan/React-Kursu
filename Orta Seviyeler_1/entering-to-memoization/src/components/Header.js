import React, {memo} from 'react';

function Header({ increase }) {

    console.log("Header component re-render");

  return (
    <>
    <div>Header</div>
    <button onClick={increase}>Increase</button>
    </>
  )
}

export default memo(Header);


/* 
import React, {useState, useEffect} from 'react';
import { Link, useParams, useLocation, useNavigate} from 'react-router-dom';

function UserDetail() {

  const location = useLocation();
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(location?.state?.id || 1);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => setUser(data))


  }, [userId])

  return (
    <>
    <h2>
      User Detail
    </h2>

    {user?.id && <pre>{JSON.stringify(user, null, 2)}</pre>}
   {location.state && <pre>{JSON.stringify(location.state, null, 2)}</pre>}
   
   <Link to={`/users/${userId}`}>fsfd</Link>
    <button onClick={() => setUserId(userId + 1)}>Next User</button>
    </>
  )
}

export default UserDetail; */