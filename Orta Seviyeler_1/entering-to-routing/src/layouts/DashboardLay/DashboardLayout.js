import React from 'react';
import Menu from '../../components/Menu';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <>
    <div><Menu /></div>
    <div id='content'>
        <Outlet />
    </div>
    </>
  )
}

export default DashboardLayout;