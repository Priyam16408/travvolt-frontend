import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
// hotel tabs

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography } from '@mui/material';
import Classselect from "../../components/Classselect"

// import Searchresult from './Searchresult';

import Addanothercity from "../../components/Addanothercity";



// bootstrap
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Homeform = (props) => {


    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <section>
            <div className="container homeform_container">
                <p className="header_row">
                    <h5>{props.header}</h5>
                </p>
                <div className="row content_row" >

                    <div className="col-12" mx={5}>
                        <Box sx={{ width: '100%', typography: 'body1' }} >
                            <TabContext value={value} centered>
                                <Box pt={5}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example"
                                        TabIndicatorProps={{ style: { display: "none", }, }}
                                        sx={{ marginX: "60px", }}>
                                        <Tab label="Book Train Tickets" value="1" sx={{ fontSize: '15px', color: 'black', fontWeight: 'bold', background: 'white', marginX: '5px', borderRadius: '10px' }}  ></Tab>
                                        <Tab label="Check PNR Status" value="2" sx={{ fontSize: '15px', color: 'black', fontWeight: 'bold', background: 'white', marginX: '5px', borderRadius: '10px' }} />
                                        <Tab label="Live Train Status" value="3" sx={{ fontSize: '15px', color: 'black', fontWeight: 'bold', background: 'white', marginX: '5px', borderRadius: '10px' }}  ></Tab>
                                    </TabList>
                                </Box>
                                {/* Book Train Tickets start */}

                                <TabPanel value="1" >
                                    <Box py={2} sx={{ backgroundColor: "white", borderRadius: "20px", }}>

                                        <form action="">
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-lg-3 mb-3">
                                                    <div className="form_input">
                                                        <label for="from" className="form_lable">From</label>
                                                        <select name="" id="" style={{ width: "100%", borderRadius: "20PX", height: "5rem", border: "3px solid #70707069", paddingLeft: '25px' }}>
                                                            <option mx={5}>Enter City or airport </option>
                                                            <option px={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>hello1</option>
                                                            <option px={5}>hello2</option>
                                                            <option px={5}>hello3</option>
                                                            <option mx={5}>hello4</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-3 mb-3">
                                                    <div className="form_input">
                                                        <label className="form_lable">To</label>
                                                        <select name="" id="" style={{ width: "100%", borderRadius: "20PX", height: "5rem", border: "3px solid #70707069", paddingLeft: '25px' }}>
                                                            <option mx={5}>Enter City or airport</option>
                                                            <option px={5}>₹0 - ₹1500</option>
                                                            <option px={5}>₹0 - ₹1500</option>
                                                            <option px={5}>₹0 - ₹1500</option>
                                                            <option mx={5}>₹0 - ₹1500</option>
                                                        </select>


                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-2 mb-3">
                                                    <div className="form_input">
                                                        <label for="departure" className="form_lable">Travel Date</label>

                                                        <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport" >

                                                        </input>
                                                    </div>
                                                </div>


                                                <div className="col-12 col-md-6 col-lg-2 mb-3">
                                                    <div className="form_input">
                                                        <label className="form_lable">Travellers & Class</label>
                                                        <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport">

                                                        </input>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-2 mb-3" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <form action='/Searchresult' >
                                                        <Box display='flex' justifyContent='center' >
                                                            <div class="wrapper" >
                                                                <text className='col-auto fare_search '  >
                                                                    <button type='submit' path="" className='search' >  Search</button>
                                                                </text>
                                                            </div>
                                                        </Box>
                                                    </form>
                                                </div>


                                            </div>
                                        </form>

                                    </Box>
                                    {/* <form action='/Searchresult'>
                                        <Box display='flex' justifyContent='center'>
                                            <div class="wrapper">
                                                <text className='col-auto fare_search '  >
                                                    <button type='submit' path="" className='search' >  Search</button>
                                                </text>
                                            </div>
                                        </Box>
                                    </form> */}
                                </TabPanel>


                                {/* Book Train Tickets end */}


                                {/* Check PNR Status start */}

                                <TabPanel value="2" >
                                    <Box py={2} sx={{ backgroundColor: "white", borderRadius: "20px", }}>

                                        <form action="">
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-lg-3 mb-3">
                                                    <div className="form_input">
                                                        <label for="from" className="form_lable">From</label>
                                                        <select name="" id="" style={{ width: "100%", borderRadius: "20PX", height: "5rem", border: "3px solid #70707069", paddingLeft: '25px' }}>
                                                            <option mx={5}>Enter City or airport </option>
                                                            <option px={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>hello1</option>
                                                            <option px={5}>hello2</option>
                                                            <option px={5}>hello3</option>
                                                            <option mx={5}>hello4</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-3 mb-3">
                                                    <div className="form_input">
                                                        <label className="form_lable">To</label>
                                                        <select name="" id="" style={{ width: "100%", borderRadius: "20PX", height: "5rem", border: "3px solid #70707069", paddingLeft: '25px' }}>
                                                            <option mx={5}>Enter City or airport</option>
                                                            <option px={5}>₹0 - ₹1500</option>
                                                            <option px={5}>₹0 - ₹1500</option>
                                                            <option px={5}>₹0 - ₹1500</option>
                                                            <option mx={5}>₹0 - ₹1500</option>
                                                        </select>


                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-2 mb-3">
                                                    <div className="form_input">
                                                        <label for="departure" className="form_lable">Travel Date</label>

                                                        <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport" >

                                                        </input>
                                                    </div>
                                                </div>


                                                <div className="col-12 col-md-6 col-lg-2 mb-3">
                                                    <div className="form_input">
                                                        <label className="form_lable">Travellers & Class</label>
                                                        <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport">

                                                        </input>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-2 mb-3" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <form action='/Searchresult' >
                                                        <Box display='flex' justifyContent='center' >
                                                            <div class="wrapper" >
                                                                <text className='col-auto fare_search '  >
                                                                    <button type='submit' path="" className='search' >  Search</button>
                                                                </text>
                                                            </div>
                                                        </Box>
                                                    </form>
                                                </div>


                                            </div>
                                        </form>

                                    </Box>
                                    {/* <form action='/Searchresult'>
                                        <Box display='flex' justifyContent='center'>
                                            <div class="wrapper">
                                                <text className='col-auto fare_search '  >
                                                    <button type='submit' path="" className='search' >  Search</button>
                                                </text>
                                            </div>
                                        </Box>
                                    </form> */}
                                </TabPanel>


                                {/* Check PNR Status end */}

                                {/* Live Train Status start */}

                                <TabPanel value="3" >
                                    <Box py={2} sx={{ backgroundColor: "white", borderRadius: "20px", }}>

                                        <form action="">
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-lg-3 mb-3">
                                                    <div className="form_input">
                                                        <label for="from" className="form_lable">From</label>
                                                        <select name="" id="" style={{ width: "100%", borderRadius: "20PX", height: "5rem", border: "3px solid #70707069", paddingLeft: '25px' }}>
                                                            <option mx={5}>Enter City or airport </option>
                                                            <option px={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>hello1</option>
                                                            <option px={5}>hello2</option>
                                                            <option px={5}>hello3</option>
                                                            <option mx={5}>hello4</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-3 mb-3">
                                                    <div className="form_input">
                                                        <label className="form_lable">To</label>
                                                        <select name="" id="" style={{ width: "100%", borderRadius: "20PX", height: "5rem", border: "3px solid #70707069", paddingLeft: '25px' }}>
                                                            <option mx={5}>Enter City or airport</option>
                                                            <option px={5}>₹0 - ₹1500</option>
                                                            <option px={5}>₹0 - ₹1500</option>
                                                            <option px={5}>₹0 - ₹1500</option>
                                                            <option mx={5}>₹0 - ₹1500</option>
                                                        </select>


                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-2 mb-3">
                                                    <div className="form_input">
                                                        <label for="departure" className="form_lable">Travel Date</label>

                                                        <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport" >

                                                        </input>
                                                    </div>
                                                </div>


                                                <div className="col-12 col-md-6 col-lg-2 mb-3">
                                                    <div className="form_input">
                                                        <label className="form_lable">Travellers & Class</label>
                                                        <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport">

                                                        </input>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-2 mb-3" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <form action='/Searchresult' >
                                                        <Box display='flex' justifyContent='center' >
                                                            <div class="wrapper" >
                                                                <text className='col-auto fare_search '  >
                                                                    <button type='submit' path="" className='search' >  Search</button>
                                                                </text>
                                                            </div>
                                                        </Box>
                                                    </form>
                                                </div>


                                            </div>
                                        </form>

                                    </Box>
                                    {/* <form action='/Searchresult'>
                                        <Box display='flex' justifyContent='center'>
                                            <div class="wrapper">
                                                <text className='col-auto fare_search '  >
                                                    <button type='submit' path="" className='search' >  Search</button>
                                                </text>
                                            </div>
                                        </Box>
                                    </form> */}
                                </TabPanel>


                                {/* Live Train Status end */}



                            </TabContext>
                        </Box>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Homeform;