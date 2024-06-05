/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const Dashboardebike = ({ bike, onDeleteProduct }) => {

    const token = localStorage.getItem("token");

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // eslint-disable-next-line react/prop-types
                fetch(`https://supersonic-ebike-server.onrender.com/ebike/${bike._id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json",
                        authorization: `Bearer ${token}`,
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Product has been deleted.",
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false
                        });
                        console.log(data);
                        // eslint-disable-next-line react/prop-types
                        onDeleteProduct(bike._id);
                    });



            }
        });

    }


    return (
        <div className="card h-auto w-auto glass">
            <figure><img className="p-5" src={bike?.imageLink} alt="car!" /></figure>
            <div className="card-body">
                <Link to={`/ebike/${bike._id}`}><h2 className="card-title">{bike?.name}</h2></Link>
                <p className="font-semibold">Price : {bike?.price}$</p>
                <p className="">{bike?.details.slice(0, 80)}... <Link to={`/ebike/${bike._id}`} ><a className="text-blue-500"> Read more</a></Link> </p>
                <div className=" flex  justify-between">
                    <Link to={`/dashboard/products/edit-product/${bike?._id}`}><button className="btn bg-gray-600 hover:bg-gray-700 text-white">Update</button></Link>
                    <button onClick={handleDelete} className="btn bg-red-500 hover:bg-red-600 text-white ">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboardebike;