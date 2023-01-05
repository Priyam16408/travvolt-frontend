import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
// hotel tabs

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid, Paper, Radio, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';

import Checkbox from '@mui/material/Checkbox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Priceslider from "../searchresult/Priceslider";
import Searchtab from "../searchresult/Searchtab";
import Selectflight from '../searchresult/Selectflight';
import Rangeslide from '../searchresult/Rangeslide';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import AddIcon from '@mui/icons-material/Add';
import GppGoodIcon from '@mui/icons-material/GppGood';
import user from "../../images/user.png";
import email from "../../images/email.png";
import chat from "../../images/chat.png";

import './booknow.css';



// bootstrap
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function valuetext(value) {
    return `${value}°C`;
}



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Popularfilter = (props) => {


    const [value, setValue] = React.useState('1');







    return (
        <section>
            <div className="container ">
                <div className="row popular_content">

                    <div className="col-12">
                        <div className='row' style={{ display: 'flex' }}>

                            <div className='col-md-9 ' >

                                <div className='leftsection' display='flex' justifyContent='center' alignItems='center' py={3}>
                                    <Box py={1}>
                                        <Typography className='top_heading'>Complete Your Booking</Typography>

                                        <Box className='ticket_details'>
                                            <Typography className='para_head'>Ticket Details</Typography>
                                            <Grid container className='deals'>
                                                <Grid md={3} className='deal_const'>
                                                    <Typography className='txt_m'>IndiGO</Typography>
                                                    <Typography className='txt_small'>6E 2431, 6E 909</Typography>
                                                    <Typography className='txt_small1'>Economy</Typography>
                                                </Grid>
                                                <Grid md={3} className='deal_const'>
                                                    <Typography className='time_up'>DEL 17:25</Typography>
                                                    <Typography sx={{ fontSize: '16px', color: '#707070', marginTop: '10px' }} >Tue, 27 Dec, 2022</Typography>
                                                    <Typography sx={{ fontSize: '16px', color: '#FF8900', lineHeight: '1', font: ' normal normal bold 16px/16px Quicksand !important' }}>Indira Gandhi International Airport, New Delhi, India (Terminal 1)</Typography>
                                                </Grid>
                                                <Grid md={3} className='deal_const' >
                                                    <Typography sx={{ fontSize: '14px', color: '#707070', textAlign: 'center' }}>09h 15m</Typography>
                                                    <Typography textAlign='center' style={{ color: '#39BBCE' }}>.....<ConnectingAirportsIcon />........</Typography>
                                                    <Typography sx={{ textAlign: 'center' }}>Flight Duration</Typography>
                                                </Grid>
                                                <Grid md={3} className='deal_const' style={{ textAlign: 'right' }}>
                                                    <Typography className='time_up' style={{ textAlign: 'right' }}>BOM 19:25</Typography>
                                                    <Typography sx={{ fontSize: '16px', color: '#707070', marginTop: '10px' }} >Tue, 27 Dec, 2022</Typography>
                                                    <Typography sx={{ fontSize: '16px', color: '#FF8900', lineHeight: '1', font: ' normal normal bold 16px/16px Quicksand !important' }}>Indira Gandhi International Airport, New Delhi, India (Terminal 1)</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>

                                        <Box className='ticket_details' py={2}>
                                            <Typography className='para_head'>Important Information</Typography>
                                            <Typography className='guidline'><AddIcon style={{ color: 'red', backgroundColor: '#f9f9f9', borderRadius: '50%' }} />COVID Guidelines and Vaccination Requirements</Typography>
                                            <ul>
                                                <li className='list_item'>COVID test/vaccination rules: All travellers entering Maharashtra must carry either a final COVID vaccination certificate (both doses done) OR a negative RT PCR report with a sample taken within 72 hours before arrival. RT-PCR test timeline starts from the swab collection time. Negative RT-PCR test report is not required for fully vaccinated travellers to enter Maharashtra. Travellers might not be allowed to board their flights if they are not carrying a valid test report/vaccination certificate. Thermal screening will be done for all travellers. For Mumbai: In exceptional cases like family distress, etc., testing may be allowed on arrival at the airport.</li>
                                                <li className='list_item'><b>Quarantine rules: </b>When arriving from a domestic city/state: No quarantine or hand stamping for asymptomatic travellers. Pre-registration or e-Pass requirements: Download and update Aarogya</li>
                                                <li className='list_item'>Check the detailed list of travel guidelines issued by Indian States and UTs here Know More</li>

                                                <li className='list_item'>If you have arrived on any international flight and are taking a connecting domestic flight, please check the 'Travelling to India' tab Here</li>
                                            </ul>
                                            <Typography className='guidline'><AddIcon style={{ color: 'red', backgroundColor: '#f9f9f9', borderRadius: '50%' }} />Pre-Flight Checklist</Typography>
                                            <ul>
                                                <li className='list_item'>Remember to web check-in before arriving at the airport; carry a printed or soft copy of the boarding pass. Wearing masks/face covers is no longer mandatory. However, all travellers are advised to wear them, in view of the threat posed by COVID-19. </li>
                                                <li className='list_item'> One hand bag up to 7 kgs and 55x35x25cm, is allowed per traveller as cabin baggage. Certain personal articles like a lady's purse, laptop bags, etc. can be carried additionally. </li>
                                            </ul>
                                            <p style={{ marginLeft: '24px' }} className='list_item'>
                                                <b>DISCLAIMER:</b> The information provided above is only for ready reference and convenience of customers, and may not be exhaustive. We strongly recommend that you check the full text of the guidelines issued by the State Governments and Airlines before travelling to ensure smooth travel. We accept no liability in this regard. In case you do not meet the required guidelines, the airline or state authorities can stop you from travelling.

                                            </p>
                                            <Divider py={5} />
                                            <Box>
                                                <Box style={{ display: 'flex', marginTop: '10px' }} px={2}>
                                                    <GppGoodIcon style={{ color: 'gold' }} />
                                                    <div>
                                                        <Typography className='list_item' style={{ color: 'black' }}>Travel Insurance</Typography>
                                                        <Typography style={{ font: "normal normal bold  Quicksand !important", fontSize: '12px', color: '#252525' }}>30min settlement | Easy clain process</Typography>
                                                    </div>
                                                </Box>
                                                <Box style={{ display: 'flex', justifyContent: 'space-between' }} px={4} pt={1}>
                                                    <Typography style={{ font: "normal normal bold 12px Quicksand !important", color: '#252525' }}>Delays Beyond 60mins</Typography>
                                                    <Typography style={{ font: "normal normal bold 12px Quicksand !important", color: '#FF951A' }}>Flat ₹1000</Typography>
                                                </Box>
                                                <Box style={{ display: 'flex', justifyContent: 'space-between' }} px={4} pt={1}>
                                                    <Typography style={{ font: "normal normal bold 12px Quicksand !important", color: '#252525' }}>Airline Cancellation</Typography>
                                                    <Typography style={{ font: "normal normal bold 12px Quicksand !important", color: '#FF951A' }}>Flat ₹2500</Typography>
                                                </Box>
                                                <Box style={{ display: 'flex', justifyContent: 'space-between' }} px={4} pt={1}>
                                                    <Typography style={{ font: "normal normal bold 12px Quicksand !important", color: '#252525' }}>Missed Flight</Typography>
                                                    <Typography style={{ font: "normal normal bold 12px Quicksand !important", color: '#FF951A' }}>Flat ₹3500</Typography>
                                                </Box>
                                                <Typography sx={{ color: '#006FFF', font: 'normal normal bold 12px/15px Quicksand', justifyContent: 'center', display: 'flex', marginTop: '10px' }}>*Don't let a flight delay or cancellation add to your worries. Get your trip Insured.</Typography>
                                                <Stack spacing={2} direction="row" display='flex' justifyContent='center' py={2}>
                                                    <Button variant="outlined">Insure for ₹249/ person</Button>
                                                    <Button variant="outlined">I will take the risk</Button>
                                                </Stack>
                                            </Box>
                                            <Divider py={5} />

                                            <Box>
                                                <Box style={{ display: 'flex', marginTop: '12px', marginBottom: '12px' }} px={2}>
                                                    <Typography className='list_item' style={{ color: 'black', marginY: '12px' }}>Traveller Details</Typography>
                                                </Box>
                                                <Box style={{ backgroundColor: '#F5F5F5', display: 'flex', justifyContent: 'space-around', boxShadow: '0px 3px 6px #00000029', borderRadius: '10px', marginLeft: '25px', marginRight: '25px' }} pt={1}>
                                                    <Grid md={4} display='flex' >
                                                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                                            <img src={user} style={{ width: '17%', height: 'auto', }}></img>
                                                            <Typography
                                                                style={{
                                                                    font: 'normal normal bold 16px / 20px Quicksand',
                                                                    color: '#252525'
                                                                }}>Adult (12 Year+)
                                                            </Typography>
                                                        </div>


                                                    </Grid>
                                                    <Grid md={4}>
                                                        <Button >+Add New Adult</Button>
                                                    </Grid>
                                                    <Grid md={4}>
                                                        <Typography>0/1 added</Typography>
                                                    </Grid>
                                                </Box>
                                                <Box style={{ marginTop: '10px' }} px={2}>
                                                    <Typography className='list_item' style={{ color: 'black', marginTop: '12px' }}>Booking Details will be sent to</Typography>
                                                    <Box style={{ display: 'flex', marginTop: '15px', justifyContent: 'left' }}>
                                                        <div style={{ display: 'flex', }}>
                                                            <img src={email} />
                                                            <Typography className='list_item' marginLeft='10px'>Add Email ID</Typography>
                                                        </div>
                                                        <div style={{ display: 'flex', marginLeft: '250px' }}>
                                                            <img src={chat} />
                                                            <Typography className='list_item' marginLeft='10px'>Enter Your Mobile Number</Typography>
                                                        </div>
                                                    </Box>
                                                    <Box style={{ marginTop: '10px', display: 'flex' }}>
                                                        <Checkbox {...label} />
                                                        <Typography className='list_item' display='flex' alignItems="center">I have a GST number</Typography>
                                                    </Box>
                                                    <Box style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                                                        <Button variant='contained' sx={{ borderRadius: '20px', color: 'white', backgroundColor: '#006FFF', fontSize: '18px' }}>Continue</Button>
                                                    </Box>
                                                </Box>
                                            </Box>

                                        </Box>
                                        <Box className='ticket_details' pb={3}>
                                            <Typography className='para_head' >Seats & Meal</Typography>
                                        </Box>


                                    </Box>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <Box className='leftsection' py={5} >
                                    <Typography className='main_he'>Fare Summary</Typography>
                                    <Typography className='main_m'>1 Adult</Typography>
                                    <Box className='fare_summery' py={1}>
                                        <Typography color='#006FFF' sx={{ fontSize: '12px', font: 'normal normal bold 12px Quicksand', justifyContent: 'space-between',marginX:'20px' }}>Base Fare</Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between',marginX:'20px' }} pt={1}>
                                            <Typography fontSize='10px' font='normal normal bold 10px Quicksand'>Adult (1)</Typography>
                                            <Typography fontSize='12px' font='normal normal bold 12px Quicksand' color="#FF8900" fontWeight='bold'>₹23443</Typography>
                                        </Box>
                                    </Box>
                                    <Box className='fare_summery' py={1}>
                                        <Typography color='#006FFF' sx={{ fontSize: '12px', font: 'normal normal bold 12px Quicksand', justifyContent: 'space-between',marginX:'20px' }}>Base Fare</Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between',marginX:'20px' }} pt={1}>
                                            <Typography fontSize='10px' font='normal normal bold 10px Quicksand'>Total fee & surcharges:</Typography>
                                            <Typography fontSize='12px' font='normal normal bold 12px Quicksand' color="#FF8900" fontWeight='bold'>₹243</Typography>
                                        </Box>
                                    </Box>
                                    <Box className='fare_summery' py={1}>
                                        <Typography color='#006FFF' sx={{ fontSize: '12px', font: 'normal normal bold 12px Quicksand', justifyContent: 'space-between',marginX:'20px' }}>Other Services</Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between',marginX:'20px' }} pt={1}>
                                            <Typography fontSize='10px' font='normal normal bold 10px Quicksand'>Charity</Typography>
                                            <Typography fontSize='12px' font='normal normal bold 12px Quicksand' color="#FF8900" fontWeight='bold'>₹10</Typography>
                                        </Box>
                                    </Box>
                                    <Box className='fare_summery' py={1}>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between',marginX:'20px' }} pt={1}>
                                            <Typography color='#006FFF' sx={{ fontSize: '12px', font: 'normal normal bold 12px Quicksand', }}>Total Amount</Typography>
                                            <Typography fontSize='12px' font='normal normal bold 12px Quicksand' color="#FF8900" fontWeight='bold'>₹24510</Typography>
                                        </Box>
                                    </Box>
                                    <Box py={2}>
                                    <Divider />
                                    </Box>
                                    <Box pb={3}>
                                    <Typography className='main_he'>Cancellation Refund Policy</Typography>
                                    <Typography sx={{ color: '#006FFF', font: 'normal normal bold 12px Quicksand', display: 'flex', justifyContent: 'center' ,marginTop:'10px'}}>DEL-BOM</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-around', }} pt={1}>
                                        <Typography fontSize='10px' font='normal normal bold 8px Quicksand' color='#707070' fontWeight='bold'>Cancel Between (IST)</Typography>
                                        <Typography fontSize='12px' font='normal normal bold 8px Quicksand' color='#707070' fontWeight='bold'>Cancellation Penalty</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between',marginX:'20px' }} pt={1}>
                                        <Typography color='#006FFF' sx={{ fontSize: '8px', font: 'normal normal bold 8px Quicksand', }}>Now - 14 Jan (11:50)</Typography>
                                        <Typography fontSize='8px' font='normal normal bold 8px Quicksand' color="#FF8900" fontWeight='bold'>₹2345</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between',marginX:'20px' }} pt={1}>
                                        <Typography color='#006FFF' sx={{ fontSize: '8px', font: 'normal normal bold 8px Quicksand', }}>14 Jan (11:50) - 18 Jan (09:50)</Typography>
                                        <Typography fontSize='8px' font='normal normal bold 8px Quicksand' color="#FF8900" fontWeight='bold'>₹3453</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between',marginX:'20px' }} py={1}>
                                        <Typography color='#006FFF' sx={{ fontSize: '8px', font: 'normal normal bold 8px Quicksand', }}>18 Jan (09:50) - 18 Jan (11:50)</Typography>
                                        <Typography fontSize='8px' font='normal normal bold 8px Quicksand' color="#FF8900" fontWeight='bold'>₹4565</Typography>
                                    </Box>
                                    </Box>
                                    
                                </Box>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Popularfilter;