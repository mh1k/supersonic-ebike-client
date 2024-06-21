import { useEffect, useState } from "react";
import Products from "../Products";

const Topebike = () => {

    const [bike, setBike] = useState([])

    useEffect(() => {
        fetch("https://supersonic-ebike-server.onrender.com/ebike")
            .then(res => res.json())
            .then(data => setBike(data))
    }, [])



    return (
        <div>
            <h1 className="text-center font-bold text-5xl my-20">Built for adventure</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 my-10 justify-center mx-10" >
                {
                    bike?.slice(0, 2).map(ebike => <Products key={ebike?._id} bike={ebike}></Products>)
                }

            </div>
        </div>
    );
};

export default Topebike;