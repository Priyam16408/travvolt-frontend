import React from "react";
import DatePickerExample from "../components/Datepicker";
import Choosetclass from "../components/Choosetclass"
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { height } from "@mui/system";
import "./card.css"
const HomeForm = () => {
    return (
        <form action="">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <div className="form_input">
                        <label for="from" className="form_lable">FROM</label>
                        <select name="" id="" style={{ width: "100%", borderRadius: "20PX", height: "5rem", border: "3px solid #70707069" }}>
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
                        <label for="to" className="form_lable">TO</label>
                        <select name="" id="" style={{ width: "100%", borderRadius: "20PX", height: "5rem", border: "3px solid #70707069" }}>
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
                        <label for="departure" className="form_lable">DEPARTURE</label>

                        <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport" >

                        </input>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-2 mb-3">
                    <div className="form_input">
                        <label for="return" className="form_lable">RETURN</label>
                        <input type="date" name="departure" id="departure" className="deaprture_input" placeholder="Enter city or airport" >

                        </input>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-2">
                    <div className="form_input">
                        <label for="return" className="form_lable">TRAVELLERS & CLASS </label>


                        <input type="data" name="return" id="return" className="return_input" style={{ width: "100%", borderRadius: "20PX", height: "5rem", border: "3px solid #70707069" }} component={ <Choosetclass />} placeholder="Enter city or airport"></input>

                        {/* <select name="" id="" style={{ width: "100%", borderRadius: "20PX", height: "5rem", border: "3px solid #70707069" }}>
                            
                            <Choosetclass />
                          
                            
                        </select> */}

                    </div>
                </div>
            </div>
        </form>
    )
}

export default HomeForm;