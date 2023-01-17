
import { useEffect, useState } from 'react';
import { useGetUserQuery, useUpdateUserMutation } from '../features/user/userApi';

const UpdateModal = ({ id }) => {
    const { data: user, isLoading, isError } = useGetUserQuery(id);
    const [updateUser, { data, error }] = useUpdateUserMutation();
    const [name, setName] = useState(user?.name);
    const [gender, setGender] = useState(user?.gender);
    const [birthDay, setBirthday] = useState(user?.birthDay);

    useEffect(() => {
        setName(user?.name || "");
        setGender(user?.gender || "");
        setBirthday(user?.birthDay || "");
    }, [user]);


    const handleUpdate = () => {

        updateUser({
            id,
            data: {
                name,
                birthDay,
                gender,
            }
        });

    }
    return (
        <>
            <div>
                <input type="checkbox" id="update-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <form onSubmit={handleUpdate}>
                        <div className="modal-box">
                            <h3 className="font-bold text-lg mb-5 text-success">Update Your profile!</h3>
                            <input value={name} name="name" type="text" placeholder="Update your Name" className="input input-bordered input-primary w-full input-sm" onChange={(e) => setName(e.target.value)} />
                            <input name="gender" type="text" value={gender} placeholder="Update your gender" className="mt-3 mb-3 input input-bordered input-primary w-full input-sm" onChange={(e) => setGender(e.target.value)} />
                            <input name="birthDay" type="text" value={birthDay} placeholder="Update your birthday" className="input input-bordered input-primary w-full input-sm" onChange={(e) => setBirthday(e.target.value)} />
                            <div className="modal-action">
                                <label htmlFor="update-modal" className="btn btn-success btn-xs text-white" onClick={() => handleUpdate()}>Update</label>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

export default UpdateModal;