import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
// hotel tabs

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import HomeForm from "./home_form";
import Button from '@mui/material/Button';
import { display } from '@mui/system';
import Card from "../components/Card";
import { Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// slider
import Slider from "react-slick";
import nepal from "../images/card/nepal.png";

// bootstrap
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Homeform = (props) => {

    const settings = {
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
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
                                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered >
                                        <Tab label="Search" value="1" sx={{ fontSize: '20px', backgroundColor: '#FF8900', borderRadius: '20px    0 0 20px', color: 'white', fontWeight: 'bold', margin: '1px' }} className="hello" />
                                        <Tab label="Destinations" value="2" sx={{ fontSize: '20px', backgroundColor: '#FF8900', color: 'white', fontWeight: 'bold', margin: '1px' }} />
                                        <Tab label="Search Deals " value="3" sx={{ fontSize: '20px', backgroundColor: '#FF8900', color: 'white', fontWeight: 'bold', margin: '1px' }} />
                                        <Tab label="Featured" value="4" sx={{ fontSize: '20px', backgroundColor: '#FF8900', color: 'white', fontWeight: 'bold', margin: '1px' }} />
                                        <Tab label="Travel Guidlines" value="5" sx={{ fontSize: '20px', backgroundColor: '#FF8900', borderRadius: '  0 20px 20px  0', color: 'white', fontWeight: 'bold', margin: '1px' }} />

                                    </TabList>
                                </Box>


                                <TabPanel value="1" >
                                    <Box py={2} sx={{ backgroundColor: "white", marginX: "80px", borderRadius: "20px", }} >
                                        <form action="" >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form_input" display="flex">
                                                        <label for="from" className="form_lable">FROM</label>
                                                        <input type="text" name="from" id="from" className="from_input" placeholder="Enter city or airport" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form_input" display="flex">
                                                        <label for="to" className="form_lable">TO</label>
                                                        <input type="text" name="to" id="to" className="to_input" placeholder="Enter city or airport" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>


                                    </Box>
                                </TabPanel>
                                <TabPanel value="2" >
                                    <Box py={2} sx={{ backgroundColor: "white", marginX: "80px", borderRadius: "20px", }} >
                                        <Grid container elevation={3} alignItems="center" py={2}>
                                            <Grid item xs={12} md={3} alignItems="center" sx={{ '& button': { m: 1 } }}>
                                                <div>
                                                    <Button variant="contained" size="large" sx={{ backgroundColor: '#FF8900', width: '200px' }}>
                                                        <Checkbox {...label} icon={<FavoriteBorder sx={{ color: 'white' }} />} checkedIcon={<Favorite sx={{ color: 'white' }} />} />Best Selling
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" size="large" sx={{ width: '200px' }}>
                                                        <Checkbox {...label} icon={<FavoriteBorder sx={{ color: '#FF8900', }} />} checkedIcon={<Favorite sx={{ color: '#FF8900' }} />} />Emerging
                                                    </Button>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={9}>
                                                <Slider {...settings}>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>

                                                </Slider>
                                            </Grid>
                                        </Grid>


                                    </Box>
                                </TabPanel>
                                <TabPanel value="3">
                                    <Box py={2} sx={{ backgroundColor: "white", marginX: "80px", borderRadius: "20px", }} >
                                        <Grid container elevation={3} alignItems="center" py={2}>
                                            <Grid item xs={12} md={3} alignItems="center" sx={{ '& button': { m: 1 } }}>
                                                <div>
                                                    <Button variant="contained" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', backgroundColor: '#FF8900', fontSize: '14px' }}>
                                                        Flat 30% off on Taj
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', color: 'black', fontSize: '14px', border: '1px solid #FF8900' }}>Honeymoon package
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', color: 'black', fontSize: '14px', border: '1px solid #FF8900' }}>Nearby Vacays
                                                    </Button>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={9}>
                                                <Slider {...settings}>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>

                                                </Slider>
                                            </Grid>
                                        </Grid>


                                    </Box>
                                </TabPanel>
                                <TabPanel value="4" >
                                    <Box py={2} sx={{ backgroundColor: "white", marginX: "80px", borderRadius: "20px", }} >
                                        <Grid container elevation={3} alignItems="center" py={2}>
                                            <Grid item xs={12} md={3} alignItems="center" sx={{ '& button': { m: 1 } }}>
                                                <div>
                                                    <Button variant="contained" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', backgroundColor: '#FF8900', fontSize: '14px' }}>
                                                        Explore Buy Theme
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', color: 'black', fontSize: '14px', border: '1px solid #FF8900' }}>
                                                        Best Selling Holidays
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', color: 'black', fontSize: '14px', border: '1px solid #FF8900' }}>
                                                        Special offers
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" endIcon={<NavigateNextIcon />} size="small" sx={{ width: '200px', color: 'black', fontSize: '14px', border: '1px solid #FF8900' }}>
                                                        Cordelia Cruises
                                                    </Button>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={9}>
                                                <Slider {...settings}>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="card_wrapper" >
                                                            <div className="card_image">
                                                                <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                            </div>
                                                            <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                        </div>
                                                    </div>

                                                </Slider>
                                            </Grid>
                                        </Grid>


                                    </Box>
                                </TabPanel>
                                <TabPanel value="5" >
                                    <Box py={2} sx={{ backgroundColor: "white", marginX: "80px", borderRadius: "20px", }} >
                                        <Grid container elevation={3} alignItems="center" py={2}>
                                            <Grid item xs={12} md={3} alignItems="center" sx={{ '& button': { m: 1 } }}>
                                                <div>
                                                    <Button variant="contained" size="large" sx={{ backgroundColor: '#FF8900', width: '200px' }}>
                                                        <Checkbox {...label} icon={<FavoriteBorder sx={{ color: 'white' }} />} checkedIcon={<Favorite sx={{ color: 'white' }} />} />Domestic
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button variant="outlined" size="large" sx={{ width: '200px' }}>
                                                        <Checkbox {...label} icon={<FavoriteBorder sx={{ color: '#FF8900', }} />} checkedIcon={<Favorite sx={{ color: '#FF8900' }} />} />International
                                                    </Button>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={9} display="flex">

                                                <div>
                                                    <div className="card_wrapper" >
                                                        <div className="card_image">
                                                            <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                        </div>
                                                        <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                    </div>
                                                </div>
                                                <div ms={5}>
                                                    <div className="card_wrapper" >
                                                        <div className="card_image">
                                                            <img src={nepal} alt="cardimage" style={{ width: "110px", }} />
                                                        </div>
                                                        <div className="card_name" style={{ textAlign: "center" }}>Nepal</div>
                                                    </div>
                                                </div>





                                            </Grid>
                                        </Grid>


                                    </Box>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                    <div className="col-12">
                        <div className="row select_fare">
                            <span className='col-auto fare_submit'>
                                <button type='submit'>SUBMIT</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Homeform;