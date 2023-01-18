import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetUsersQuery } from '../features/user/userApi';
import Product from './Product';

const Products = () => {
    const [id, setId] = useState("");
    console.log(id)
    const { data: users } = useGetUsersQuery();
    JSON.stringify(users);
    // console.log(users.isSubscribed);
    return (
        <div className='flex flex-wrap justify-center items-center h-auto p-5 bg-gray-900'>
            {
                users?.map(user => <Product key={user._id} user={user}></Product>)
            }

        </div>
    );
};

export default Products;