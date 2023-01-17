import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import UpdateModal from '../Component/updateModal';
// import { useGetUsersQuery } from '../features/api/useSlice';
import { fetchUsers } from '../features/auth/userSlice';


const Profile = () => {
    // const { data: users, isLoading, isError } = useGetUsersQuery()
    // console.log(users);

    const dispatch = useDispatch()
    const user = useSelector(state => state.user);
    console.log(user)
    useEffect(() => {
        dispatch(fetchUsers())
        fetchUsers()
    }, [dispatch]);

    return (
        <>
            <UpdateModal />
            {/* {
                !isLoading && !isError && users?.length > 0
            } */}
            <div className='flex flex-wrap justify-center items-center h-auto p-8 bg-gray-900'>
                {user.user?.map(user => <div key={user._id} className="card w-60 bg-teal-900 m-3">
                    <div className="avatar m-auto mt-5">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy `} alt="" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-white m-auto">{user.name}</h2>
                        <p className='text-white m-auto'>Gender: <span className='ml-1 m-auto '>{user.gender}</span></p>
                        <p className='text-white m-auto'>Birth Day: <span className='ml-1 m-auto '>{user.birthDay}</span></p>

                        <div className="card-actions justify-center">
                            <button className="btn-disabled btn-error btn-xs text-white ">Subscribed</button>
                        </div>
                        <div className="card-actions justify-center">
                            <label htmlFor="update-modal" className="btn btn-info btn-outline btn-xs text-white">Update Info</label>

                        </div>
                    </div>


                </div>
                )}
            </div>

        </>
    );
};

export default Profile;