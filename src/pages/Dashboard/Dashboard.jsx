/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Tooltip, PieChart, Pie } from 'recharts';

const Dashboard = () => {


    const [data, setData] = useState([]);
    const [userData, setUsersData] = useState([]);

    useEffect(() => {
        fetch("https://supersonic-ebike-server.onrender.com/ebike")
            .then((res) => res.json())
            .then((data) => {
                const newData = data?.map(bike => {
                    const obj = {
                        name: bike.name,
                        price: parseInt(bike.price)

                    }
                    return obj
                })
                setData(newData)
            });
    }, [])


    useEffect(() => {
        fetch("https://supersonic-ebike-server.onrender.com/users")
            .then((res) => res.json())
            .then((data) => setUsersData(data));
    }, [])



    console.log(data);

    // console.log(data);


    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
                <div className="card shadow-lg compact bg-base-100">
                    <div className="card-body">
                        <h3 className="card-title">Product</h3>
                        <p>we've {data.length} ebike.</p>
                    </div>
                </div>
                <div className="card shadow-lg compact bg-base-100">
                    <div className="card-body">
                        <h3 className="card-title">User</h3>
                        <p>we've {userData.length} registered user </p>
                    </div>
                </div>
                {/* <div className="card shadow-lg compact bg-base-100">
                    <div className="card-body">
                        <h3 className="card-title">Card 3</h3>
                        <p>This is another card.</p>
                    </div>
                </div> */}
            </div>
            <div>
                <h1 className="mt-10 text-2xl font-semibold">Product Price PieChart : </h1>
                <div className="flex justify-center">
                    <PieChart width={300} height={300}>
                        <Pie
                            dataKey="price"
                            isAnimationActive={false}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />

                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;