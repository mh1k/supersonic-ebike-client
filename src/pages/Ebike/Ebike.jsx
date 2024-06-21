// import { useLoaderData } from "react-router-dom";
import Products from "../../components/Products";
import { useEffect, useState } from "react";

const Ebike = () => {

    // const data = useLoaderData();
    // console.log(data);

    const [searchbike, setSearchbike] = useState("")
    const [ebike, setEbike] = useState([])

    useEffect(() => {
        fetch(`https://supersonic-ebike-server.onrender.com/ebike?search=${searchbike}`)
            .then(res => res.json())
            .then(data => setEbike(data))
    }, [searchbike])

    useEffect

    const handleSearch = (e) => {
        // console.log(e.target.value);
        setSearchbike(e.target.value)
    }



    return (
        <div className="bg-custom-gradient pb-10">
            <div className="hero h-[60vh] sm:h-[45vh] lg:h-[60vh] " >
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg text-black">
                        {/* <p className="text-lg mb-5 mt-20 sm:mt-0">Service</p> */}
                        <h1 className="mb-8 text-5xl font-semibold">Easy ride, easy go</h1>
                        {/* <p>No matter where you ride, we have got you and your bike covered. With a range of services to support you at every turn, you can keep your bike in tune, protect it against theft, and get help whenever and wherever you need it.</p> */}

                        {/* search method */}
                        <div className="flex justify-center ">
                            <label className="input  input-bordered flex items-center w-3/4 gap-2">
                                <input onChange={handleSearch} type="text" className="grow" placeholder="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 items-center justify-center mx-[2%] sm:mx-[4%]">
                {
                    ebike?.map(bike => <Products key={bike?._id} bike={bike}></Products>)
                }


            </div>

        </div>
    );
};

export default Ebike;