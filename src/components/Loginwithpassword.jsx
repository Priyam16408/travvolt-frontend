import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { Radio, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';


import './card.css';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function MaxWidthDialog() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


    return (
        <React.Fragment>


            <Button onClick={handleClickOpen} variant="contained" disableElevation fontSize="14px" sx={{ width: "250px", borderRadius: "20px", border: "2px solid #0000DC", backgroundColor: "#006FFF" }} >
                <IconButton sx={{ color: '#254B70' }} aria-label="Continue">

                </IconButton> <Typography color='white'>Continue</Typography>
            </Button>

            <Dialog PaperProps={{
                sx: {
                    width: "1043px",
                    maxHeight: "498px",
                    backgroundColor: "red"
                }
            }} fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose} textAlign='center' className='' >

                <DialogContent className='background_login ' >


                    <Box sx={{ flexGrow: 1, }} >
                        <Grid container spacing={2} >
                            <Grid xs={6} md={6}>

                            </Grid>
                            <Grid xs={6} md={6} >
                                <Item sx={{ boxShadow: '0px 0px 8px black', borderRadius: '20px' }} px={5}>
                                    <Box py={2} >
                                        <DialogTitle color='black' fontWeight='bold' justifyContent='start'>Login with password</DialogTitle>
                                        <Typography fontSize="12px" color="black">Enter your Password</Typography>
                                    </Box>
                                    <Box>
                                        <div className="login_input" width='50px' height='10px' py={5}>
                                            <label for="number" className="login_lable"> Password</label>
                                            <input type="password" name="to" id="number" fontSize='9px' className="phone_input" placeholder="********" />
                                            
                                        </div>
                                       <Checkbox {...label} defaultChecked sx={{marginRight:"180px"}} />
                                    </Box>
                                    <Box pt={2} pb={5} sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}>
                                        <Button px={2} variant="contained" disableElevation sx={{ width: "250px", borderRadius: "20px", border: "2px solid #0000DC", backgroundColor: "#006FFF", fontSize: "14px" }}>
                                             Create Account
                                        </Button>


                                    </Box>
                                    {/* <Box pt={5}>
                                        <DialogTitle color='black' fontSize='10px'>By proceeding, you agree to Travvolt<Link href="#" underline="always" color="#FF5733">
                                            {'Privacy Policy'}
                                        </Link> , <Link href="#" underline="always" color="#FF5733">
                                                {'User Agreement'}
                                            </Link> and <Link href="#" underline="always" color="#FF5733">
                                                {'Terms of Service'}
                                            </Link></DialogTitle>
                                    </Box> */}
                                </Item>
                            </Grid>

                        </Grid>
                    </Box>
                    {/* <DialogActions>
                        <Button onClick={handleClose} sx={{ color: "white" }}>Close</Button>
                    </DialogActions> */}
                </DialogContent>

            </Dialog>
        </React.Fragment>
    );
}