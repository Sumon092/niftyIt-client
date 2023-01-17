
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useUpdateUserMutation } from '../features/auth/authApi';
import { fetchUsers } from '../features/auth/userSlice';

const UpdateModal = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user);
    // const updatedUi = user.user.map(u => u);
    const [updateUser, { loading }] = useUpdateUserMutation();
    console.log(updateUser);
    // console.log(user);
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    const handleUpdate = (e) => {
        e.preventDefault()
        updateUser({ id: user._id, name: e.target.name, gender: e.target.gender, birthDay: e.target.birthDay });
        e.target.reset();
    }
    return (
        <>

            {
                user.user?.map(user => <div key={user._id} >
                    <input type="checkbox" id="update-modal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <form onSubmit={handleUpdate}>
                            <div className="modal-box">
                                <h3 className="font-bold text-lg mb-5 text-success">Update Your profile!</h3>
                                <input defaultValue={user.name} name="name" type="text" placeholder="Update your Name" className="input input-bordered input-primary w-full input-sm" />
                                <input name="gender" type="text" defaultValue={user?.gender} placeholder="Update your gender" className="mt-3 mb-3 input input-bordered input-primary w-full input-sm" />
                                <input name="birthDay" type="text" defaultValue={user.birthDay} placeholder="Update your birthday" className="input input-bordered input-primary w-full input-sm" />
                                <div className="modal-action">
                                    <label htmlFor="update-modal" className="btn btn-success btn-xs text-white">Update</label>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>)
            }
        </>

    );
};

export default UpdateModal;