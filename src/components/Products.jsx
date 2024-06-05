/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Products = ({ bike }) => {
    return (
        <div className="card w-auto glass">
            <figure><img className="p-5" src={bike.imageLink} alt="car!" /></figure>
            <div className="card-body">
                <Link to={`/ebike/${bike._id}`}><h2 className="card-title">{bike?.name}</h2></Link>
                <p className="font-semibold">Price : {bike?.price}$</p>
                <p className="">{bike?.details.slice(0,80)}... <Link to={`/ebike/${bike._id}`} ><a className="text-blue-500"> Read more</a></Link> </p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div> */}
            </div>
        </div>
    );
};

export default Products;