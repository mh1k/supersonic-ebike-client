
const Service = () => {
    return (
        <div className="bg-[#1d1d1d] p-10 text-white">
            <div className="my-10">
                <p className="text-xl">Supersnoic at your service</p>
                <p className="text-3xl sm:text-4xl sm:w-[38%] mt-4">A network of support at the ready and on the road.</p>

            </div>
            <div className="flex flex-col sm:flex-row justify-around gap-4 ">
                <div className="relative max-h-80  overflow-hidden">
                    <img
                        src="https://cowboy.com/cdn/shop/t/33/assets/cowboy-warranty-extension_520x@2x.jpg?v=86071003386201134961715002500"
                        alt="Avatar"
                        className="object-cover "
                    />
                    <div className="absolute w-full py-2.5 bottom-0 inset-x-0  text-white text-xl font-semibold mx-5 mb-5 text-left leading-4">
                    Warranty
                    </div>
                </div>
                <div className="relative max-h-80 overflow-hidden">
                    <img
                        src="https://cowboy.com/cdn/shop/t/33/assets/cowboy-services-theft-insurance_520x@2x.jpg?v=126605467044018060681715002499"
                        alt="Avatar"
                        className="object-cover "
                    />
                    <div className="absolute w-full py-2.5 bottom-0 inset-x-0  text-white text-xl font-semibold mx-5 mb-5 text-left leading-4">
                        Theft Insurance
                    </div>
                </div>
                <div className="relative max-h-80  overflow-hidden">
                    <img
                        src="https://cowboy.com/cdn/shop/t/33/assets/cowboy-services-care_520x@2x.jpg?v=111059325592511806261715002505"
                        alt="Avatar"
                        className="object-cover "
                    />
                    <div className="absolute w-full py-2.5 bottom-0 inset-x-0  text-white text-xl font-semibold mx-5 mb-5 text-left leading-4">
                        Sonic Care
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;