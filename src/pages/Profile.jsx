import UpdateModal from '../Component/updateModal';
import { useGetUsersQuery } from '../features/user/userApi';

import { useState } from 'react';
import User from '../Component/User';
import Loader from '../ui/loaders/Loader';
import Error from '../ui/Error';


const Profile = () => {
    const [updateInfo, setUpdateInfo] = useState(true);
    const [id, setId] = useState("");
    // console.log(id);
    const { data: user, isLoading, isError } = useGetUsersQuery();
    JSON.stringify(user)
    return (
        <>
            {updateInfo && <UpdateModal id={id} />}
            {
                isLoading && <Loader />
            }
            {
                !isLoading && isError && <Error />
            }
            {
                !isLoading && !isError && user?.length === 0 && <p>No video found</p>
            }
            <div className='flex flex-wrap justify-center items-center h-auto p-8 bg-gray-900'>
                {
                    !isLoading && !isError && user?.length > 0 &&
                    user?.map(user => <User key={user._id} user={user} setId={setId} />)}
            </div>

        </>
    );
};

export default Profile;