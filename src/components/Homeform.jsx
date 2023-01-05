import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HomeForm from "./home_form";
// bootstrap
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const Homeform = (props) => {
    return (
        <section className="homeform">
            <div className="container homeform_container">
                <p className="header_row">
                    <h5>{props.header}</h5>
                </p>
                <div className="row content_row">
                    <div className="col-12">
                        <div style={{ margin: "40px 0px 30px" }}>
                            <div class="form-check form-check-inline form_radio">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label class="form-check-label" for="inlineRadio1">One-way</label>
                            </div>
                            <div class="form-check form-check-inline form_radio">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">Round-Trip</label>
                            </div>
                            <div class="form-check form-check-inline form_radio">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                <label class="form-check-label" for="inlineRadio3">Multi-City</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <HomeForm></HomeForm>
                    </div>
                    <div className="col-12">
                        <div className="row select_fare">
                            <p className="fare_header">Select A Fare Type:</p>
                            <span className='col-auto fare_radio '>
                                <input type="checkbox" className='checkbox-round' /><NavLink>Regular Fares</NavLink>
                            </span>
                            <span className='col-auto fare_radio '>
                                <input type="checkbox" className='checkbox-round' /><NavLink>Armed Forces Fares</NavLink>
                            </span>
                            <span className='col-auto fare_radio'>
                                <input type="checkbox" className='checkbox-round' /><NavLink>Student Fares</NavLink>
                            </span>
                            <span className='col-auto fare_radio'>
                                <input type="checkbox" className='checkbox-round' /><NavLink>Senior Citizen Fares</NavLink>
                            </span>
                            <span className='col-auto fare_radio'>
                                <input type="checkbox" className='checkbox-round' /><NavLink>Doctors & Nurses Fares</NavLink>
                            </span>
                            <span className='col-auto fare_radio'>
                                <input type="checkbox" className='checkbox-round' /><NavLink>Double Seat Fares</NavLink>
                            </span>
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