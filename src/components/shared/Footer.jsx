
const Footer = () => {
    return (

        <footer className='bg-gray-800  py-10 px-16 text-white sm:space-y-20 '>
            <div className='sm:flex justify-between text-center sm:text-left space-y-8 sm:space-y-0'>
                <div className='sm:w-2/4'>
                    <h1 className="font-bold text-3xl">Supersonic</h1>
                </div>
                <div className='sm:mt-0 space-y-3 font-normal text-lg'>
                    <p>About us</p>
                    <p>Read our blog</p>
                    <p>Sign up </p>
                </div>
                <div className='space-y-3 font-normal text-lg'>
                    <p>Get Help</p>
                    <p>Ask any question</p>
                    <p>Contact</p>
                </div>

            </div>
            <div className='flex mt-8 sm:mt-0 flex-col-reverse sm:flex-row sm:justify-between text-center sm:text-left'>
                <p>Developed by Mahmudul Hasan</p>
                <div className='flex space-x-3 sm:space-x-20 justify-center font-normal text-lg mb-8 sm:mb-0'>
                    <p>Policy</p>
                    <p>Terms of Use</p>
                    <p>Pricing</p>
                </div>
            </div>

        </footer>


    );
};

export default Footer;