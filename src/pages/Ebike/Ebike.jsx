import { useLoaderData } from "react-router-dom";
import Products from "../../components/Products";

const Ebike = () => {

    const data = useLoaderData();
    console.log(data);



    return (
        <div className="bg-custom-gradient pb-10">
            <div className="hero h-[60vh] sm:h-[45vh] lg:h-[60vh] " >
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg text-black">
                        {/* <p className="text-lg mb-5 mt-20 sm:mt-0">Service</p> */}
                        <h1 className="mb-5 text-5xl font-semibold">Easy ride, easy go</h1>
                        {/* <p>No matter where you ride, we have got you and your bike covered. With a range of services to support you at every turn, you can keep your bike in tune, protect it against theft, and get help whenever and wherever you need it.</p> */}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 items-center justify-center mx-[2%] sm:mx-[4%]">
                {
                    data?.map(bike =><Products key={bike?._id} bike={bike}></Products> )
                }


            </div>

        </div>
    );
};

export default Ebike;