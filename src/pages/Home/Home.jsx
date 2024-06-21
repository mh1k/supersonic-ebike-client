import Banner from "../../components/Home/Banner";
import Certified from "../../components/Home/Certified";
import Features from "../../components/Home/Features";
import Service from "../../components/Home/Service";
import TestRide from "../../components/Home/TestRide";
import Topebike from "../../components/Home/Topebike";

const Home = () => {
    return (
        <div className="bg-custom-gradient">
            <Banner></Banner>
            <Topebike></Topebike>
            <Features></Features>
            <TestRide></TestRide>
            <Certified></Certified>
            <Service></Service>
        </div>
    );
};

export default Home;