
import Searchnavbar from "../../pages/searchresult/Searchnavbar";
import Mainheader from "../../UI/Mainheader";
// import Homeform from "../../components/Homeform";
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import SwipeToSlide from "../../components/Card";
import Download from "../../components/Download";
import Footer from "../../layouts/Footer";
import Searchsection from '../../pages/searchresult/Searchsection';
import Popularfilter from "./Popularfilter";
import Demo from './Demo';
import Blackdiv from '../../pages/searchresult/Blankdiv';


const Searchresult = () => {
    return (
        <div className="Searchresult_panner">
            <Searchnavbar></Searchnavbar>
            <Blackdiv />
            <Searchsection className='main_box' />
            <Popularfilter />
            {/* <Demo></Demo> */}
            <Download />
            <Footer></Footer>

        </div>
    )
}
export default Searchresult;
