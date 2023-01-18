import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserQuery, useUpdateUserMutation } from '../features/user/userApi';
import Error from '../ui/Error';
import Loader from '../ui/loaders/Loader';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51MRMo9DneZwkHD1NveFqVGmJSEntJzkb8TDGWmfEdwHE0S3dZXdYkm2rjDha0mO1jfn70KVXf2gg1f2Gy0KHL7At00mq8Vvrxc');

const Payment = () => {
    const { id } = useParams();
    const { data: user, isLoading, isError } = useGetUserQuery(id);
    return (
        <>
            {
                isLoading && <Loader />
            }
            {
                isError && <Error>{isError.message}</Error>
            }
            <div className='flex flex-wrap justify-center items-center bg-gray-900 rounded-t-sm'>
                <div className="hero min-h-screen  bg-gray-900">
                    <div className="hero-content flex-col lg:flex-row-reverse bg-white p-12 rounded-md">
                        <div className="card w-96 bg-slate-400 text-error shadow-xl">
                            <div className="card-body">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm user={user} />
                                </Elements>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-5xl text-success font-bold">Hello, {user?.name}</h1>
                            <p className="py-6 text-black-900">Please pay <strong className='text-success text-3xl'>$ {user?.price}</strong> for your new Netflix series subscription</p>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default Payment;