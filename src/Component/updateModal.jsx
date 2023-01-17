
import { useGetUsersQuery } from '../features/user/userApi';

const UpdateModal = () => {

    const { data: user, isLoading, isError } = useGetUsersQuery();
    JSON.stringify(user)
    console.log(user);
    const handleUpdate = (e) => {
        e.preventDefault()
    }
    return (
        <>
            {
                isLoading && <p>Loading...</p>
            }
            {
                !isLoading && isError && <p>There is an Error</p>
            }
            {
                !isLoading && !isError && user?.length === 0 && <p>No video found</p>
            }
            {
                !isLoading && !isError && user?.length > 0 &&
                user?.map(user => <div key={user?._id} >
                    <input type="checkbox" id="update-modal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <form onSubmit={handleUpdate}>
                            <div className="modal-box">
                                <h3 className="font-bold text-lg mb-5 text-success">Update Your profile!</h3>
                                <input defaultValue={user?.name} name="name" type="text" placeholder="Update your Name" className="input input-bordered input-primary w-full input-sm" />
                                <input name="gender" type="text" defaultValue={user?.gender} placeholder="Update your gender" className="mt-3 mb-3 input input-bordered input-primary w-full input-sm" />
                                <input name="birthDay" type="text" defaultValue={user?.birthDay} placeholder="Update your birthday" className="input input-bordered input-primary w-full input-sm" />
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