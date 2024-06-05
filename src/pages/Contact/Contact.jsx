/* eslint-disable react/no-unescaped-entities */

const Contact = () => {


    return (
        <div className="bg-custom-cgradient ">

            <div className="px-4 py-8 sm:p-14 flex flex-col  lg:flex-row items-center sm:h-[90vh] lg:h-[110vh]  gap-5">
                <div className="mt-20 lg:mt-0 text-center lg:text-left">
                    <h1 className="font-semibold text-4xl lg:text-5xl my-5">Contact us</h1>
                    <p className="mx-auto text-lg lg:mx-0 w-[90%] sm:w-[70%] lg:w-[55%]">Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below</p>
                </div>
                <div className="bg-[#f8f3ec] p-8 rounded-lg drop-shadow-lg w-full sm:mt-10 max-w-md">
                    {/* <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2> */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-2 mt-2 border rounded-md input input-bordered"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-2 mt-2 border rounded-md input input-bordered "
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Message</label>
                            <textarea
                                required
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-gray-300 focus:ring-2  focus:ring-gray-300 input-bordered"
                                rows="4"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full btn bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;