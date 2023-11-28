import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppNavbar from '../shared/components/navbar/AppNavbar';

const AppNavigation = () => {
  return (
    <div className='secondary-background'>
      <AppNavbar />
      <Outlet />
    </div>
  );
};

export default AppNavigation;
