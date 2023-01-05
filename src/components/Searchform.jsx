import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Paper, Typography, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { FormatAlignJustifyRounded } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Datepicker from "./Datepicker";
import Citypicker from "./Citypicker";
import ButtonGroup from '@mui/material/ButtonGroup';
import Returndatepicker from "./Returndatepicker";
import Choosetclass from "./Choosetclass";
export default function InputAdornments() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const Change = (event) => {
        setSelectedValue(event.target.value);
    };

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

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (

        <React.Fragment>
            <section>
                <container maxWidth="md">
                    <Box py={16} px={10}>
                        <Paper elevation={3} py={2} px={4} sx={{ borderRadius: '15px', justifyContent: "center" }} >
                            <Box pt={5} px={10}>
                                <FormControl>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                        <FormControlLabel value="One-Way" control={<Radio />} label="One-Way" />
                                        <FormControlLabel value="Round-Way" control={<Radio />} label="Round-Way" />
                                        <FormControlLabel value="Multi-City" control={<Radio />} label="Multi-City" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: "center" }} pt={2}>

                                <TextField
                                    label="FROM"
                                    id="outlined-start-adornment" 
                                    sx={{ m: 1, width: '25ch' }}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Citypicker /></InputAdornment>,
                                    }}
                                />
                                <Avatar mt={5}>
                                    <SwapHorizIcon />
                                </Avatar>
                                <TextField
                                    label="TO"
                                    id="outlined-start-adornment" 
                                    sx={{ m: 1, width: '25ch' }}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"> <Citypicker /></InputAdornment>,
                                    }}
                                />
                                <Box margin="10px">
                                    <Datepicker />
                                </Box>
                                <Box margin="10px">
                                    <Returndatepicker m={2} />
                                </Box>
                                <TextField
                                    label="TRAVELLERS & CLASS"
                                    id="outlined-start-adornment" placeholder='1 Adult Business'
                                    sx={{ m: 1, width: '25ch' }}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Choosetclass /></InputAdornment>,
                                    }}
                                />


                            </Box>
                            <Box pb={5} pt={2} display="flex" justifyContent="Space-between" px={15} alignItems="center">

                                <Typography>Select A Fare Type:</Typography>
                               

                                <Button variant="contained" color="warning" ><Typography fontSize="12px" fontWeight="bold">Regular Fares</Typography></Button>
                                <Button variant="contained"  sx={{backgroundColor:"gray"}}><Typography fontSize="12px" fontWeight="bold">Armed Forces Fares</Typography></Button>
                                <Button variant="contained"  sx={{backgroundColor:"gray"}}><Typography fontSize="12px" fontWeight="bold">SStudent Fares</Typography></Button>
                                <Button variant="contained"  sx={{backgroundColor:"gray"}}><Typography fontSize="12px" fontWeight="bold">Senior Citizen Fares</Typography></Button>
                                <Button variant="contained"  sx={{backgroundColor:"gray"}}><Typography fontSize="12px" fontWeight="bold">Double Seat Fares</Typography></Button>



                                <Button variant="contained"  ><Typography fontSize="25px" fontWeight="bold">Search</Typography></Button>
                            </Box>
                        </Paper>
                    </Box>
                </container>
            </section>
        </React.Fragment>



    );
}