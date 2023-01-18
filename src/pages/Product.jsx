import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ user }) => {
    const { price, _id: id } = user;

    return (
        <div className="card m-3 w-80 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Netflix Series!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Subscription Price : $ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/product/${id}`} className="btn btn-outline btn-xs btn-success badge badge-outline">Subscribe</Link>

                </div>
            </div>
        </div>
    );
};

export default Product;