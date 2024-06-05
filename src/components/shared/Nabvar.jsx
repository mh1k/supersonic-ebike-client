import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';



const Nabvar = () => {

    const [scroll, setScroll] = useState(false);
    const [newuserphoto, setNuserPhoto] = useState("");

    const { user, logOut } = useAuth();

    setTimeout(() => {
        setNuserPhoto(user?.photoURL);
    }, 500)



    window.onscroll = () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 0) {
            setScroll(true)
            // console.log(currentScroll);
        }
        else {
            // console.log(currentScroll);
            setScroll(false)
        }



    }



    return (
        <Disclosure as="nav" className={`w-full fixed top-0 z-50 ${!scroll ? "bg-transparent transition duration-500" : "bg-white shadow-md transition duration-500"}`} >
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2   sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <h1 className='text-3xl font-bold'>Supersonic</h1>
                                </div>
                                <div className="hidden sm:mx-auto sm:block">
                                    <div className="flex mt-2 space-x-8">

                                        <Link to="/"><a className='px-3 py-[0.85rem] font-medium text-lg border-b-2 border-transparent hover:border-b-2 hover:border-black' href="">Home</a></Link>
                                        <Link to="/ebike"><a className='px-3 py-[0.85rem] font-medium text-lg border-b-2 border-transparent hover:border-b-2 hover:border-black' href="">eBike</a></Link>
                                        <Link to="/service"><a className='px-3 py-[0.85rem] font-medium text-lg border-b-2 border-transparent hover:border-b-2 hover:border-black' href="">Service</a></Link>
                                        <Link to="/about"><a className='px-3 py-[0.85rem] font-medium text-lg border-b-2 border-transparent hover:border-b-2 hover:border-black' href="">About</a></Link>
                                        <Link to="/contact"><a className='px-3 py-[0.85rem] font-medium text-lg border-b-2 border-transparent hover:border-b-2 hover:border-black' href="">Contact</a></Link>
                                        {
                                            user && <Link to="/dashboard"><a className='px-3 py-[0.85rem] font-medium text-lg border-b-2 border-transparent hover:border-b-2 hover:border-black' href="">Dashboard</a></Link>
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                !user?.email ?
                                    <div className='space-x-6'>
                                        {/* <Link className='text-lg font-semibold' to='/signin'>Sign In</Link> */}

                                        <Link to='/login'><button className='px-4 py-2  text-lg font-semibold text-white rounded-full bg-black active:scale-110  duration-200 transition ease-in-out'>Login</button></Link>
                                    </div> :
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">



                                        <Menu as="div" className="relative ">
                                            <div>
                                                <MenuButton className="flex rounded-full text-sm border-2 border-white">
                                                    {/* <span className="absolute -inset-1.5" /> */}
                                                    <span className="sr-only">Open user menu</span>
                                                    {
                                                        user?.photoURL ? <img className="h-10 w-10 rounded-full " src={newuserphoto} alt="" /> :
                                                            <FaUserCircle className="w-10 h-10" />
                                                    }
                                                </MenuButton>
                                            </div>
                                            <Transition
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <MenuItems className="absolute flex flex-col justify-center items-center right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non">

                                                    {
                                                        user?.photoURL ? <img className="h-10 w-10 mt-4 rounded-full mx-auto" src={user?.photoURL} alt="" /> : <FaUserCircle className="w-10 h-10" />
                                                    }

                                                    <p className='text-center text-lg'>{user?.displayName}</p>

                                                    <MenuItem>
                                                        <button onClick={() => logOut()} className='px-4 py-1 my-4 text-base font-semibold text-white rounded-full bg-gray-600 hover:bg-gray-700  active:scale-110  duration-200 transition ease-in-out'>Sign out</button>
                                                    </MenuItem>

                                                </MenuItems>
                                            </Transition>
                                        </Menu>
                                    </div>
                            }


                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden bg-white">
                        <div className="space-y-1 px-2 pb-3 pt-2">

                            <Link to={"/"}>
                                <DisclosureButton

                                    className='text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                                >
                                    Home
                                </DisclosureButton></Link>
                            <Link to={"/ebike"}>
                                <DisclosureButton

                                    className='text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                                >
                                    eBike
                                </DisclosureButton></Link>
                            <Link to={"/service"}>
                                <DisclosureButton

                                    className='text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                                >
                                    Service
                                </DisclosureButton></Link>
                            <Link to={"/about"}>
                                <DisclosureButton

                                    className='text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                                >
                                    About
                                </DisclosureButton></Link>
                            <Link to={"/contact"}>
                                <DisclosureButton

                                    className='text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                                >
                                    Contact
                                </DisclosureButton></Link>
                            <Link to={"/dashboard"}>
                                <DisclosureButton

                                    className='text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                                >
                                    Dashboard
                                </DisclosureButton></Link>

                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
};

export default Nabvar;