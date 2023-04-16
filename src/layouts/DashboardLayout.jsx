import React from 'react';
import SideBar from '../Pages/Dashboard/Dashboard/SideBar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='md:flex relative min-h-screen'>
            <SideBar />
            <div className='flex-1 p-5'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;