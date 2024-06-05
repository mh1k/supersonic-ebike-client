import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Nabvar from "../components/shared/Nabvar";
import Spinner from "../components/shared/Spinner";
import useAuth from "../hooks/useAuth";

const Roots = () => {

    const { navloading } = useAuth();
    if (navloading) {
        return <Spinner/>
    }

    return (
        <div className="font-poppins">
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;