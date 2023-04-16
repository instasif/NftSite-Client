import React from 'react';
import SideBar from '../Pages/Dashboard/Dashboard/SideBar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='md:flex relative min-h-scree'>
            <SideBar />
            <div className='flex-1 p-5 md:ml-64'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;