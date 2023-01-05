import React from 'react';
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import Mainheader from "../../UI/Mainheader";
import Trainssearch from "./Trainssearch";
import OfferSwipeToSlide from "../../components/Offerscard";
import Toursection from "../../components/Toursection";
import SwipeToSlide from "../../components/Card";
import Download from "../../components/Download";
const Homestay = () => {
  return (
    <div className="homestay_panner">
    <Navbar></Navbar>
    <Mainheader></Mainheader>
    <Trainssearch header="Book your ideal Homestay - Villas, Apartments & more."></Trainssearch>
            <Toursection></Toursection>
            <SwipeToSlide></SwipeToSlide>
            <Download></Download>
    <Footer></Footer>
</div>
  );
};

export default Homestay;
