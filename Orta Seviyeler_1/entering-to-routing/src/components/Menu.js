import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Menu() {

  const navigate = useNavigate();

  return (
    <div>
        <ul className='menu'>
            <li>
              <a href='#/' onClick={() => navigate(-1)}>
                Back
              </a>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href='/'>Main Page(Test)</a>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>    
            </li>
            <li onClick={() => navigate("contact")}>
              Contact(Test)
            </li>
        </ul>
    </div>
  )
}

export default Menu;