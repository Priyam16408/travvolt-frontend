

import Searchnavbar from "../../pages/searchresult/Searchnavbar";
import Mainheader from "../../UI/Mainheader";
// import Homeform from "../../components/Homeform";
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import SwipeToSlide from "../../components/Card";
import Download from "../../components/Download";
import Footer from "../../layouts/Footer";
import Searchsection from '../../pages/searchresult/Searchsection';
import Bookwrapper from "./Bookwrapper";
import Blackdiv from '../../pages/searchresult/Blankdiv';


const Searchresult = () => {
    return (
        <div className="Searchresult_panner">
            <Searchnavbar></Searchnavbar>
            <Blackdiv />
           
            <Bookwrapper />
            {/* <Demo></Demo> */}
            <Download />
            <Footer></Footer>

        </div>
    )
}
export default Searchresult;
