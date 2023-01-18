// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useGetUserQuery } from '../features/user/userApi';
// import Loader from '../ui/loaders/Loader';

// const RequiredAuth = ({ children }) => {
//     const [user, loading] = useGetUserQuery();
//     JSON.stringify(user);
//     console.log(user)
//     const location = useLocation();

//     if (loading) {
//         return <Loader />
//     }

//     if (!user) {
//         return <Navigate to='/login' state={{ from: location }} replace></Navigate>
//     }
//     return children;

// };

// export default RequiredAuth;