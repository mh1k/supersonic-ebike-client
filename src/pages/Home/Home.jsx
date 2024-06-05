import Banner from "../../components/Home/Banner";
import Features from "../../components/Home/Features";
import Service from "../../components/Home/Service";
import Topebike from "../../components/Home/Topebike";

const Home = () => {
    return (
        <div className="bg-custom-gradient">
            <Banner></Banner>
            <Topebike></Topebike>
            <Features></Features>
            <Service></Service>
        </div>
    );
};

export default Home;