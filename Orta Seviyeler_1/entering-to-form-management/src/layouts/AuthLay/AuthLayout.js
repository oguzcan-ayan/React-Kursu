import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

function AuthLayout() {
  return (
    <>
    <div className='auth-container'>
      <div className='auth-menu'>
        <Link to="/auth">Log in</Link>
        <Link to="/auth/register">Register</Link>
      </div>
      <Outlet />
    </div>
    </>
  )
}

export default AuthLayout;