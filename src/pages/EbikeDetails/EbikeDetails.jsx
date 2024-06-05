import { useLoaderData } from "react-router-dom";

const EbikeDetails = () => {

    const bike = useLoaderData()

    return (
        <div className="bg-custom-gradient pb-10">
            <div className="hero h-[50vh] sm:h-[40vh] lg:h-[50vh] " >
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content mt-10">
                    <div className="max-w-lg text-black">
                        {/* <p className="text-lg mb-5 mt-20 sm:mt-0">Service</p> */}
                        <h1 className="mb-5 text-5xl font-semibold">Easy ride, easy go</h1>
                        {/* <p>No matter where you ride, we have got you and your bike covered. With a range of services to support you at every turn, you can keep your bike in tune, protect it against theft, and get help whenever and wherever you need it.</p> */}
                    </div>
                </div>
            </div>
            <div className="mx-5 sm:mx-10 mb-10">
                <div className=" flex flex-col sm:items-center justify-between sm:gap-4 lg:gap-5 lg:flex-row-reverse">
                    <div className="flex justify-center lg:flex-none mb-10">
                        <img src="https://cowboy.com/cdn/shop/files/J210_s020_CROSS-ST_Side-Profile_MUSHROOM_F11_1024x@2x.png?v=1710780517" className="max-w-[22rem] sm:max-w-md lg:max-w-lg rounded-lg" />
                    </div>
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold">{bike?.name}</h1>
                        <p className="py-6">{bike?.details} </p>
                        {/* <ul>
                            {
                               bike?.features && bike?.features.map((feature, index) => <li key={index} className="flex items-center text-base">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    {feature}</li>)
                            }
                        </ul> */}
                        <button className="btn bg-gray-600 hover:bg-gray-700 mt-5 text-white">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EbikeDetails;