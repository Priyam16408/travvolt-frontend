import React from 'react'
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import Mainheader from "../../UI/Mainheader";
import Toursection from "../../components/Toursection";
import Download from "../../components/Download";
import SwipeToSlide from "../../components/Card";
import OfferSwipeToSlide from "../../components/Offerscard";
import Hotelpackageform from "../../components/Hotelpackageform"

const Hotelpackages = () => {
    return (
        <React.Fragment>
        <div className="homestay_panner">
        <Navbar></Navbar>
            <Mainheader></Mainheader>
            <Hotelpackageform  header="Book International and Domestic Hotel Packages."></Hotelpackageform>
            <Toursection></Toursection>
            <SwipeToSlide></SwipeToSlide>
            <SwipeToSlide></SwipeToSlide>
            <OfferSwipeToSlide></OfferSwipeToSlide>
            <Download></Download>
            <Footer></Footer>
        </div>
            
        </React.Fragment>
    )
}

export default Hotelpackages;
