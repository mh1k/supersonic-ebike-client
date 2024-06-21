import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const Profile = () => {
    const { user, resetPassword } = useAuth();

    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, [user])
    console.log(userInfo);

    const changePassword = () => {

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, reset it!"
        }).then((result) => {
            if (result.isConfirmed) {
                resetPassword(user?.email)
                    .then(() => {
                        Swal.fire({
                            text: "Password reset email sent! Check your inbox.",
                            icon: "success",
                            timer: 3000,
                            showConfirmButton: false
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    })




            }
        });






    }


    return (
        <div>
            <div className="card sm:w-[45%] lg:w-[40%] flex flex-col  mx-auto space-y-5 shadow-lg bg-white  px-2 sm:px-5 sm:py-8 mt-0 sm:mt-5 ">
                <div className="p-2 lg:p-5">
                    <h2 className="text-3xl font-semibold  text-center mb-5">Profile</h2>
                    <div className="flex justify-center">
                        {
                            user?.photoURL ? <img src={user?.photoURL} className="text-center w-20 rounded-full h-20" alt="" /> : <FaUserCircle className="w-20 rounded-full h-20" />
                        }
                    </div>
                    <div className="my-8 space-y-2">
                        <p className="tex">Name :  {userInfo?.name}</p>
                        <p className="tex">Email  <span>&nbsp;</span>:  {userInfo?.email}</p>
                        <p className="tex">Age  <span>&nbsp;&nbsp;</span> :  {userInfo?.age}</p>
                        <p className="tex">Phone :  {userInfo?.mobile}</p>
                    </div>
                    <div className="flex  justify-between items-center">
                        <Link to={`/dashboard/profile/edit-profile/${userInfo?._id}`}><button className="btn text-white bg-gray-600 hover:bg-gray-700">Edit Profile</button></Link>
                        <button onClick={()=>changePassword()} className="btn text-white bg-gray-600 hover:bg-gray-700">Change Password</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;