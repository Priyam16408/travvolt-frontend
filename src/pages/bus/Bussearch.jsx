import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
// hotel tabs

import Box from '@mui/material/Box';
// bootstrap
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

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



                        </Box>
                    </div>
                    <div className="col-12">
                        <div className="row select_fare">
                            <form action='/Searchresult'>
                                <Box display='flex' justifyContent='center'>
                                    <div class="wrapper">
                                        <text className='col-auto fare_search '  >
                                            <button type='submit' path="" className='search' >  Search</button>
                                        </text>
                                    </div>
                                </Box>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Homeform;