// slider importing 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {  Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from "./pages/Hotel/HotelHome";
import HomeStay from "./pages/homestays/HomeStay";
import Hotelpackages from "./pages/hotelpackages/Hotelpackages";
import Searchresult from "./pages/searchresult/Searchresult";
import Trains from "./pages/trains/Trains";
import Booknow from "./pages/booknow/Booknow";
import Taxi from "./pages/taxi/Taxi";
import Bus from "./pages/bus/Bus";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="hotel" element={<Hotel/>}></Route>
        <Route path="homestays" element={<HomeStay />}></Route>
        <Route path="hotelpackages" element={<Hotelpackages />}></Route>
        <Route path="searchresult" element={<Searchresult />}></Route>
        <Route path="Trains" element={<Trains />}></Route>
        <Route path="booknow" element={<Booknow/>}> </Route>
        <Route path="taxi" element={<Taxi />}></Route>
        <Route path="bus" element={<Bus />}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
