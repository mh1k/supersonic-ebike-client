/* eslint-disable react/no-unescaped-entities */


const TestRide = () => {
    return (
            <div className="hero min-h-screen ">
            <div className="hero-content p-0 flex-col  lg:flex-row mx-10">
                <div>
                    <h1 className=" text-5xl lg:text-6xl font-bold">Experience it
                    yourself</h1>
                    <p className="py-6">We'll come to you.</p>
                    <button className="btn hover:bg-gray-900 bg-black rounded-full text-white">Book a test ride</button>
                </div>
                <img src="https://cowboy.com/cdn/shop/t/32/assets/cruiser-st-black-three_fourths_front_cropped_942x.png?v=121926619712054140681710793849" className="rounded-lg lg:h-screen " />
            </div>
        </div>
    );
};

export default TestRide;