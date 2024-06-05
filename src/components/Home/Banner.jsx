
const Banner = () => {
    return (
        <section className="bg-custom-gradient h-screen sm:h-[113vh] bg-center bg-cover bg-no-repeat">
            <div className='flex items-center text-center  flex-col h-full w-auto'>
                <div className="mt-[18%] sm:mt-[10%] lg:mt-[8%] mb-6 flex flex-col items-center">
                    <p className="text-xl">Cruiser</p>
                    <p className="text-4xl sm:text-5xl lg:text-6xl my-2"> Hit Refresh</p>
                    <p className=" w-[90%] sm:w-3/5 text-lg sm:text-xl">Our Red Dot Best of the Best winning Cruiser is available in limited edition Mint. Get yours in time for summer.</p>
                </div>
                <img className="h-full  object-cover object-right lg:object-center" src="https://i.ibb.co/PNNLqxZ/bannerimg.png" alt="" />
            </div>

        </section>
    );
};

export default Banner;