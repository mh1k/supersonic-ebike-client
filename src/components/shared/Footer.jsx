import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (

        <footer className='bg-gray-800  py-10 px-16 text-white sm:space-y-20 '>
            <div className='sm:flex justify-between text-center sm:text-left space-y-8 sm:space-y-0'>
                <div className='sm:w-2/4'>
                    <h1 className="font-bold text-3xl">Supersonic</h1>
                </div>
                <div className='sm:mt-0 space-y-5  text-lg'>
                    <Link to="/about"><p>About us</p></Link>
                    <Link to="/register"><p>Create an Account</p></Link>
                </div>
                <div className='space-y-5  text-lg'>
                    <Link to="/contact"><p>Contact us</p></Link>
                    <Link to="/contact"><p>Ask any Question</p></Link>
                </div>

            </div>
            <div className='flex mt-8 sm:mt-0 flex-col-reverse sm:flex-row sm:justify-between items-center text-center sm:text-left'>
                <p>Developed by Mahmudul Hasan</p>
                <div className='flex space-x-3 sm:space-x-20 justify-center  text-lg mb-8 sm:mb-0'>
                    <span><FaFacebookSquare className="h-10 w-10 " /></span>
                    <span><FaTwitterSquare className="h-10 w-10" /></span>
                    <span><FaInstagram className="h-10 w-10" /></span>
                </div>
            </div>

        </footer>


    );
};

export default Footer;