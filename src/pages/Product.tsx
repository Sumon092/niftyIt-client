import React from 'react';

const Product = () => {
    return (
        <div className='flex justify-center items-center h-auto p-16  bg-gray-900'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Netflix Series!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Subscription Price : $ 10</p>
                    <div className="card-actions justify-end">
                        <div className="btn btn-outline btn-xs btn-success badge badge-outline">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;