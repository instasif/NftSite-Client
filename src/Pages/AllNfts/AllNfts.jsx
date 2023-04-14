import React from 'react';
import { useGetProductsQuery } from '../../app/features/Products/productsApi';
import TodayPicCard from '../../Componants/TodaysPic/TodayPicCard';
import Navigation from '../../shared/Header/Navigation';

const AllNfts = () => {
    const { data, isLoading } = useGetProductsQuery()
    const products = data || [];

    if (isLoading) {
        return <h1 className='text-center font-semibold text-2xl my-5'>Loading....</h1>
    }

    return (
        <div>
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='text-center font-semibold text-3xl my-5'>All Nfts</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5'>
                    {
                        products.map(product => <TodayPicCard key={product._id} product={product}></TodayPicCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllNfts;