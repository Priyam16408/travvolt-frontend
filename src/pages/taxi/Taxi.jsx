
import Navbar from "../../layouts/Navbar";
import Mainheader from "../../UI/Mainheader";
// import Homeform from "../../components/Homeform";
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import Download from "../../components/Download";
import Footer from "../../layouts/Footer";
import Taxisearch from './Taxisearch';
import Cabs from "../../components/Cabs";

// taxi css 
import "./taxi.css";

const Taxi = () => {
    return (
        <div className="home_panner">
            <Navbar></Navbar>
            <Mainheader ></Mainheader>
            {/* <Homeform header="Book International and Domestic Flights"></Homeform> */}
            <Taxisearch header="Book International and Domestic Flights" />
            <OfferSwipeToSlide></OfferSwipeToSlide>
            <Toursection></Toursection>
            <Cabs></Cabs>
            <Download></Download>
            <Footer></Footer>

        </div>
    )
}
export default Taxi;
