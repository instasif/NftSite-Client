import React, { useEffect, useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai'
import LiveActionCard from './LiveActionCard';
import { useSelector } from 'react-redux';

const LiveActions = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, [])
    return (
        <div className='max-w-7xl my-10 mx-5'>
            <div className='flex justify-between items-center mx-16'>
                <h3 className='text-2xl font-bold'>Live Actions</h3>
                <div className='flex justify-center items-center text-indigo-600'>
                    <h3 className='text-sm font-bold'>EXPLORE MORE</h3>
                    <span className='mx-2'> <AiFillCaretRight /></span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5'>
                {
                    products.splice(0, 4).map(product => <LiveActionCard key={product._id} product={product}></LiveActionCard>)
                }
            </div>
        </div>
    );
};

export default LiveActions;