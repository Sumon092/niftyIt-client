import React from 'react';

const Profile = () => {
    return (
        <>
            <div className='flex justify-center items-center h-auto p-16'>
                <div className="card w-96 bg-teal-900 m-auto ">
                    <div className="avatar m-auto mt-5">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-white m-auto">Life hack</h2>
                        <p className='text-white m-auto'>Gender: <span className='ml-1 m-auto '>Male</span></p>
                        <p className='text-white m-auto'>Birth Day: <span className='ml-1 m-auto '>10-10-1990</span></p>

                        <div className="card-actions justify-center">
                            <button className="btn btn-error btn-xs text-white">Subscribed</button>
                        </div>
                        <div className="card-actions justify-center">
                            <label htmlFor="my-modal-6" className="btn btn-success btn-xs text-white">Update</label>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Profile;