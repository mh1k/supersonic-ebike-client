import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user } = useAuth();

    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        fetch(`https://supersonic-ebike-server.onrender.com/users/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, [user])
    console.log(userInfo);


    return (
        <div>
            <div className="card sm:w-[45%] lg:w-[35%] flex flex-col  mx-auto space-y-5 shadow-lg bg-white  px-2 sm:px-5 sm:py-8 mt-0 sm:mt-5 ">
                <div className="lg:px-5">
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
                    <div className="flex flex-col   items-center"><Link to={`/dashboard/profile/edit-profile/${userInfo?._id}`}><button className="btn text-white bg-gray-600 hover:bg-gray-700">Edit Profile</button></Link></div>

                </div>
            </div>
        </div>
    );
};

export default Profile;