import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { ModalFooter, ModalHeader } from 'react-bootstrap';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import { FormLabel } from '@mui/material';


import PhoneInput from 'react-phone-number-input'

import './card.css';
import { Paper } from '@mui/material';
import { red } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../Redux/Auth/SignUp/actionSignUp';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1043,
    height: 498,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function BasicModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // phoneInput

      
    const [value, setValue] = useState()

    const dispatch=useDispatch()

    const userSignUp=useSelector((store)=>store.signUp)

    const [userDetail, setUserDetail]=useState({
     username:"",
     email:"",
     password:"",
     phone:{
        country_code:"+91",
        mobile_number:""
     }

    })

    const handleChange=(e)=>{
         const name=e.target.name;
        const value=e.target.value;
        setUserDetail({...userDetail, [name]:value})  
    }

    console.log("userDetail",userDetail)
    function handleSubmit(e){
        e.preventDefault()
       
        dispatch(signUpAction(userDetail))
         console.log("submitData on submit", userDetail)
        
    }
   useEffect(()=>{
    

   },[dispatch])
    return (
        <div>

            <Typography sx={{ fontSize: "12px", fontWeight: "bold",marginTop:"8px"  }} >Already have Account / <Link href="#" onClick={handleOpen}>Signup</Link></Typography>



            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='background_login '>

                    <Grid container spacing={2} alignItems="center">
                        <Grid xs={6} md={6}>

                        </Grid>
                        <Grid xs={6} md={6} display="flex" justifyContent="center" textAlign="center" alignItem="center">

                            <div className='model_content'>
                                <Box px={4} pt={2} component="form" noValidate autoComplete="off" >
                                    <ModalHeader style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>Login / Signup</ModalHeader>

                                    <FormLabel>
                                        <FormControl sx={{ m: 1, minWidth: 250, }}>

                                            <div className="login_input" width='50px' height='10px' >
                                                <label for="text" className="login_lable">User Name</label>
                                                <input type="text" name="username" value={userDetail.name} id="number" fontSize='9px' className="phone_input" placeholder="Enter User Name" 
                                                    onChange={handleChange}/>
                                            </div>
                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 250, }}>

                                            <div className="login_input" width='50px' height='10px' >
                                                <label for="number" className="login_lable">Enter Your Email</label>
                                                <input type="text" name="email" value={userDetail.email} id="number" fontSize='9px' className="phone_input" placeholder="Enter Email" onChange={handleChange}/>
                                            </div>
                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 250, }}>

                                            <div className="login_input" width='50px' height='10px' >
                                                <label for="number" className="login_lable">Phone Number</label>
                                                <input type="text" name="phone" value={userDetail.phone.mobile_number} id="number" fontSize='9px' className="phone_input" placeholder="Enter Phone Number" onChange={handleChange}/>
                                            </div>
                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 250, }}>

                                            <div className="login_input" width='50px' height='10px' >
                                                <label for="text" className="login_lable">Password</label>
                                                <input type="password" name="password" value={userDetail.password} id="number" fontSize='9px' className="phone_input" placeholder="*******" onChange={handleChange}/>
                                            </div>
                                        </FormControl>

                                    </FormLabel>
                                </Box>
                                <Box px={4}>
                                    <Button variant="contained"  disableElevation fontSize="14px" sx={{ width: "260px", borderRadius: "20px", border: "2px solid #0000DC", backgroundColor: "#006FFF" }} type="submit" onClick={handleSubmit}>
                                        Signup
                                    </Button>


                                    <Typography color='black' fontSize='10px' >By proceeding, you agree to Travvolt <Link href="#" underline="always" color="#FF5733">
                                        {'Privacy Policy'}
                                    </Link> , <Link href="#" underline="always" color="#FF5733">
                                            {'User Agreement'}
                                        </Link> and <Link href="#" underline="always" color="#FF5733">
                                            {'Terms of Service'}
                                        </Link>
                                    </Typography>
                                </Box>

                            </div>



                        </Grid>

                    </Grid>
                </Box>



            </Modal>
        </div>
    );
}