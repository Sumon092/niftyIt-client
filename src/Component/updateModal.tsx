import React from 'react';

const UpdateModal = () => {
    return (
        <div>
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-5 text-success">Update Your profile!</h3>
                    <input name="name" type="text" defaultValue={""} placeholder="Update your Name" className="input input-bordered input-primary w-full" />
                    <input name="gender" type="text" defaultValue={""} placeholder="Update your gender" className="mt-3 mb-3 input input-bordered input-primary w-full" />
                    <input name="birthDay" type="text" defaultValue={""} placeholder="Update your birthday" className="input input-bordered input-primary w-full" />
                    <div className="modal-action">
                        <label htmlFor="update-modal" className="btn btn-success btn-xs text-white">Update</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;