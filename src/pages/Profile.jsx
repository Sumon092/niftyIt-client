import React from 'react';
import { useSelector } from 'react-redux';
import UpdateModal from '../Component/updateModal';


const Profile = () => {
    const user = useSelector(state => state.user);
    console.log(user);


    return (
        <>
            <div className='flex justify-center items-center h-auto p-24 bg-gray-900'>
                <div className="card w-96 bg-teal-900 m-auto ">
                    <div className="avatar m-auto mt-5">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-white m-auto">{user?.name}</h2>
                        <p className='text-white m-auto'>Gender: <span className='ml-1 m-auto '>{user?.gender}</span></p>
                        <p className='text-white m-auto'>Birth Day: <span className='ml-1 m-auto '>{user?.birthDay}</span></p>

                        <div className="card-actions justify-center">
                            <button className="btn btn-error btn-xs text-white">Subscribed</button>
                        </div>
                        <div className="card-actions justify-center">
                            <label htmlFor="update-modal" className="btn btn-success btn-xs text-white">Update Info</label>
                            <UpdateModal />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Profile;