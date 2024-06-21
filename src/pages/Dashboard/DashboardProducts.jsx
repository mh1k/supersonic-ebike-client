
import Dashboardebike from "../../components/DashboardComponent/Dashboardebike";
import { useEffect, useState } from "react";

const DashboardProducts = () => {

    const [bikes, setbikes] = useState([]);

    useEffect(() => {
        fetch("https://supersonic-ebike-server.onrender.com/ebike")
            .then((res) => res.json())
            .then((data) => setbikes(data));
    }, []);

    const handleDeleteProduct = (id) => {
        setbikes(bikes.filter((bike) => bike._id !== id));
    };
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 items-center justify-center ">
                {
                    bikes?.map(bike => <Dashboardebike key={bike?._id} bike={bike} onDeleteProduct={handleDeleteProduct}></Dashboardebike>)


                }


            </div>


        </div>
    );
};

export default DashboardProducts;