/* eslint-disable react/no-unescaped-entities */

const Service = () => {

    const services = [
        {
            title: 'Included with every bike',
            description: 'A smooth ride comes standard.',
            features: [
                '2-year warranty',
                'In-app customer service',
                'Over-the-air updates and diagnostics',
                'Find My Bike position tracking',
            ],
        },
        {
            title: 'Supersonic Care',
            description: 'We come to you.',
            features: [
                'Unlimited on-demand bookings',
                'Service at your address of choice',
                'Cost of spare parts included',
                'Easy in-app service booking',
                'Tire punctures covered',
            ],
        },
        {
            title: 'Theft Insurance',
            description: 'Keep your bike secure.',
            features: [
                'Theft Alerts enabled',
                'No bike value depreciation',
                '24/7 assistance',
                'Claim response in 24 hours',
            ],
        },
    ];


    return (
        <div className="bg-custom-gradient pb-10">
            <div className="hero h-[60vh] " >
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg text-black">
                        <p className="text-lg mb-5 mt-20 sm:mt-0">Service</p>
                        <h1 className="mb-5 text-5xl font-semibold">Never Ride ALone</h1>
                        <p>No matter where you ride, we have got you and your bike covered. With a range of services to support you at every turn, you can keep your bike in tune, protect it against theft, and get help whenever and wherever you need it.</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-2">

                <div className="my-10">
                    <p className="text-lg">Service Overview</p>
                    <h2 className=" text-2xl sm:text-3xl lg:text-4xl ">We've got you and your <br /> bike covered.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => <div key={index} className="bg-white py-10 px-8 shadow-lg rounded-lg">
                        <h2 className={`text-2xl font-semibold  mb-8 ${service.title === "Cowboy Care" ? "w-[30%]" : "w-[50%]"}`}>{service.title}</h2>
                        <p className="text-gray-600 mb-8">{service.description}</p>
                        <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-base">
                                    <svg
                                        className="w-5 h-5 text-black mr-2"
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
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Service;