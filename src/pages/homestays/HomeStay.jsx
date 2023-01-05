import React from 'react';
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import Mainheader from "../../UI/Mainheader";
import Homestayssearch from "./Homestayssearch";
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import SwipeToSlide from "../../components/Card";
import Download from "../../components/Download";
import "./homestay.css";
const Homestay = () => {
  return (
    <div className="homestay_panner">
    <Navbar></Navbar>
    <Mainheader></Mainheader>
    <Homestayssearch header="Book your ideal Homestay - Villas, Apartments & more."></Homestayssearch>
            <Toursection></Toursection>
            <SwipeToSlide></SwipeToSlide>
            <OfferSwipeToSlide></OfferSwipeToSlide>
            <Download></Download>
    <Footer></Footer>
</div>
  );
};

export default Homestay;
