
import Navbar from "../../layouts/Navbar";
import Mainheader from "../../UI/Mainheader";
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import Download from "../../components/Download";
import Footer from "../../layouts/Footer";
import Cabs from "../../components/Cabs";
import Bussearch from "./Bussearch";

// bus css 
import "./bus.css";

const Taxi = () => {
    return (
        <div className="home_panner">
            <Navbar></Navbar>
            <Mainheader ></Mainheader>
            <Bussearch></Bussearch>
            <OfferSwipeToSlide></OfferSwipeToSlide>
            <Toursection></Toursection>
            <Cabs></Cabs>
            <Download></Download>
            <Footer></Footer>

        </div>
    )
}
export default Taxi;
