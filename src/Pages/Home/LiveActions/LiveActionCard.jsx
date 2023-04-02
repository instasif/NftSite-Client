import React from 'react';

const LiveActionCard = ({ product }) => {
    const { creatorName, creatorImage, image, price } = product;
    return (
        <div className='mx-auto border shadow-lg rounded-xl w-60'>
            <div className='p-3'>
                <img className="md:w-56 md:h-56 w-full rounded-lg" src={image} alt="" />

                <div className='flex justify-between items-center my-3'>
                    <div className='flex justify-center items-center'>
                        <img className='w-8 h-8 rounded-full p-1 ' src={creatorImage} alt="" />
                        <div>
                            <h6 className='text-xs text-gray-400'>Creator</h6>
                            <p className='font-bold'>{creatorName}</p>
                        </div>
                    </div>
                    <div>
                        <h6 className='text-xs text-gray-400'>Current Bid</h6>
                        <p className='font-bold'>{price}ETH</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className='ml-5 font-bold'>#23_46</p>
                    <button className=' border border-indigo-500 text-indigo-500 rounded-full px-3 py-1 font-bold bg-yellow-50 hover:shadow-lg hover:text-indigo-800'
                    >
                        Follow
                    </button>
                </div>
            </div>

        </div>
    );
};

export default LiveActionCard;