import React from 'react';
import TodayPicCard from './TodayPicCard';
import { AiFillCaretRight } from 'react-icons/ai'
import { useGetProductsQuery } from '../../app/features/Products/productsApi';

const TodaysPic = () => {
    const { data, isLoading } = useGetProductsQuery()
    const products = data || [];

    if (isLoading) {
        return <h1 className='text-center font-semibold text-2xl my-5'>Loading....</h1>
    }

    return (
        <div className='max-w-7xl m-5'>
            <div className='flex justify-between items-center mx-16'>
                <h3 className='text-2xl font-bold'>Today's Picks</h3>
                <div className='flex justify-center items-center text-indigo-600'>
                    <h3 className='text-sm font-bold'>EXPLORE MORE</h3>
                    <span className='mx-2'> <AiFillCaretRight /></span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5'>
                {
                    products.map(product => <TodayPicCard key={product._id} product={product}></TodayPicCard>)
                }
            </div>
        </div>
    );
};

export default TodaysPic;