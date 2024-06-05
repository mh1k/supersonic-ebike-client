import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GoSignOut } from "react-icons/go";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";

import { LuUser } from "react-icons/lu";
import { Link, Outlet } from "react-router-dom";
import Swal from 'sweetalert2';


const DashboardLayout = () => {

    const { user,logOut } = useAuth();


    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes I want"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut();
            }
        })
    }



    return (
        <div className="flex h-screen font-poppins">
            {/* Sidebar */}
            <div className={`fixed inset-y-0 w-60 bg-[#1c2434] sm:w-60 left-0 z-30 transform lg:transform-none lg:static lg:inset-0 text-white transition duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center sm:justify-center justify-around p-3 gap-3 lg:gap-0  text-primary-content ">
                    <h1 className="text-center text-white text-2xl">Supersonic</h1>
                    <button onClick={toggleSidebar} className="lg:hidden">
                        <IoChevronBackCircleOutline className="w-7 h-7" />
                    </button>
                </div>

                <nav onClick={toggleSidebar} className="p-4 mt-4 space-y-2">
                    <Link to={"/dashboard"}>
                        <a href="" className="p-2 rounded flex items-center gap-1 hover:text-white 8] hover:bg-[#333a48] "><span><RxDashboard className="w-5 h-5" /></span>Dashboard</a>
                    </Link>

                    <Link to={"/dashboard/profile"}>
                        <a href="" className=" p-2 rounded flex items-center gap-1 hover:text-white hover:bg-[#333a48] "><span><LuUser className="w-5 h-5" /></span>Profile</a>
                    </Link>

                    {/* <a href="#home" className=" p-2 rounded flex items-center gap-1 hover:bg-[#333a48] hover:text-primary-content "><span><LuUser className="w-5 h-5" /></span>Users</a> */}

                    <Link to={"/dashboard/products"}>
                        <a href="" className=" p-2 rounded flex items-center gap-1 hover:text-white hover:bg-[#333a48] "><span><AiOutlineProduct className="w-5 h-5" /></span>Products</a>
                    </Link>

                    <Link to={"/dashboard/add-product"}>
                        <a href="" className=" p-2 rounded flex items-center gap-1 hover:text-white hover:bg-[#333a48] "><span><IoMdAddCircleOutline className="w-5 h-5" /></span>Add Product</a>
                    </Link>


                    <a onClick={handleLogout} style={{ marginTop: 0 }} className=" p-2 rounded flex items-center gap-1 hover:text-white  hover:bg-[#333a48] "><span><GoSignOut className="w-5 h-5" /></span>Logout</a>



                    <Link to={"/"}>
                        <a href="" className=" p-2 rounded flex items-center gap-1 hover:text-white hover:bg-[#333a48] "><span><IoChevronBackCircleOutline className="w-5 h-5" /></span>Back to site</a>
                    </Link>


                    {/* <a href="#logout" className="block p-2 rounded hover:bg-[#333a48] hover:text-primary-content">Logout</a> */}
                </nav>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex items-center justify-between lg:justify-end p-2 shadow bg-white ">
                    <button onClick={toggleSidebar} className="btn border-1 border-white btn-ghost lg:hidden">
                        ☰
                    </button>

                    <div className="flex  items-center mr-2">
                        <h1 className="text-lg font-semibold mr-5">{user?.displayName}</h1>
                        {
                            user?.photoURL ? <img className="h-10 w-10 rounded-full border-white border-2 " src={user?.photoURL} alt="" /> :
                                <FaUserCircle className="w-10 h-10 rounded-full border-white border-2" />
                        }
                    </div>

                </header>
                <main className="flex-1 overflow-y-auto p-4">
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;