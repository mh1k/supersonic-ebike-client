
const Features = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-8 mx-10 my-10">
                <div className="relative  flex justify-center items-center overflow-hidden py-14 shadow-lg rounded-lg bg-[#e7f4f0]">
                    <img
                        src="https://i.ibb.co/rHBJs1n/auto-lock-873x-2x.webp"
                        alt="Avatar"
                        className="object-cover h-80 "
                    />
                    <div className="absolute w-full py-2.5 bottom-0 inset-x-0  text-black text-xl font-semibold mx-5 mb-5 text-left leading-4">
                    Auto Lock
                    </div>
                </div>
                <div className="relative  flex justify-center items-center  overflow-hidden py-14 shadow-lg rounded-lg  bg-[#e7f4f0]">
                    <img
                        src="https://i.ibb.co/9T5wxhh/connect-find-my-bike-2-2.gif"
                        alt="Avatar"
                        className="object-cover h-80 rounded-2xl  "
                    />
                    <div className="absolute w-full py-2.5 bottom-0 inset-x-0  text-black text-xl font-semibold mx-5 mb-5 text-left leading-4">
                        GPS Traking
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Features;