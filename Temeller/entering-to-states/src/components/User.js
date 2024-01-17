
import React, {useState} from 'react';

function User() {

    const [user, setUser] = useState({name : "Oğuzcan", surname : "Ayan"});

  return (
    <>
    <h2>User</h2>
    
    {user.name} {user.surname}

    <br/>
    <br/>

   {/*  <button onClick = {() => setUser({...user, name : "Beyza Betül"})}>Change Name</button>
    <button onClick = {() => setUser({...user, surname : "Ayan"})}>Change Surname</button> */}
    <button onClick = {() => setUser((prev) => ({...prev, name : "Beyza Betül"}))}>Change Name</button>
    <button onClick = {() => setUser((prev) => ({...prev, surname : "Ayan"}))}>Change Surname</button>
    </>
  )
}

export default User;







