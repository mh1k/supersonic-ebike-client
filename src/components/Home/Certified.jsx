/* eslint-disable react/no-unescaped-entities */
import { Link} from "react-router-dom";
const Certified = () => {
    return (
        <div>
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/ByCZZk0/bcorp-hero-portrait-1024x.webp)' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center  text-white">
                    <div className="max-w-lg flex flex-col  items-center ">
                        <img src="https://scontent.fcla2-2.fna.fbcdn.net/v/t39.30808-6/306952801_630091598511757_1097678500791215643_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE9v0xQ8g34QiCcLJBOqfM-_EVKr9kiBhb8RUqv2SIGFmUkxAIwOXkvDckUn_efmjj218PECdeQzVdT36aEqV1s&_nc_ohc=Bst_3QXXleoQ7kNvgEffjez&_nc_zt=23&_nc_ht=scontent.fcla2-2.fna&oh=00_AYD8GA0dUALZLksTnwj29nXWFW7c-feb1in-RD73ILVbmA&oe=667B2C08" className="h-20 mb-10 rounded" alt="" />
                        <h1 className="mb-5 text-5xl font-bold">World first</h1>
                        <p className="mb-5">We're the first e-bike producer to achieve B Corp status, thanks in part to initiatives like Circular, our carefully refurbished range that ensures all our bikes find a happy home.</p>
                        <Link to="/ebike" className="btn rounded-full text-white hover:bg-gray-800 bg-black">Explore ebike</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certified;