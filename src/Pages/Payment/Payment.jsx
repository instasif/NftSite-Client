import React from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useProductByIdQuery } from '../../app/features/Products/productsApi';

const stripePromise = loadStripe(import.meta.env.VITE_API_STRIPE_PK);

const Payment = () => {
    const { id } = useParams();
    const { data } = useProductByIdQuery(id)
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm data={data} />
            </Elements>
        </div>
    );
};

export default Payment;