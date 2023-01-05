import * as React from 'react';
import Box from '@mui/material/Box';



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
                    <div className="col-12" mx={5} >
                        <Box sx={{ width: '100%', typography: 'body1' }} mt={5} >
                            <form action="">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                                        <div className="form_input">
                                            <label for="from" className="form_lable">City, Property Name Or Location</label>
                                            <select name="" id="" style={{ width: "100%", borderRadius: "20PX", height: "5rem", border: "3px solid #70707069", paddingLeft: '25px' }}>
                                                <option mx={5}>Enter City or airport </option>
                                                <option px={5} sx={{ fontSize: "9px", fontWeight: "bold" }}>hello1</option>
                                                <option px={5}>hello2</option>
                                                <option px={5}>hello3</option>
                                                <option mx={5}>hello4</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-2 mb-3">
                                        <div className="form_input">
                                            <label for="departure" className="form_lable">CHECK-IN</label>

                                            <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport" >

                                            </input>
                                        </div>
                                    </div>


                                    <div className="col-12 col-md-6 col-lg-2 mb-3">
                                        <div className="form_input">
                                            <label className="form_lable">CHECK-OUT</label>
                                            <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport">

                                            </input>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                                        <div className="form_input">
                                            <label for="to" className="form_lable">Number of Guest</label>
                            
                                            <input type="text" placeholder='1 Room 2 Adults' />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-2 mb-3">
                                        <div className="form_input">
                                            <label className="form_lable">Travelling For</label>



                                            <select name="" id="" style={{ width: "100%", borderRadius: "20PX", height: "5rem", border: "3px solid #70707069", paddingLeft: '25px' }}>
                                                <option mx={5}>Select a Reason</option>
                                                <option px={5}> (optional)</option>
                                                <option px={5}> (optional)</option>
                                                <option px={5}> (optional)</option>
                                                <option mx={5}> (optional)</option>
                                            </select>


                                        </div>
                                    </div>
                                </div>
                            </form>

                        </Box>
                        <form action='/Searchresult'>
                            <Box display='flex' justifyContent='center' my={3}>
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
        </section>
    )
}

export default Homeform;