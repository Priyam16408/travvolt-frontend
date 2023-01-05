import * as React from 'react';
import { useState } from 'react';

import { Box, Paper, Grid, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Stack from '@mui/material/Stack';
import { borderColor } from '@mui/system';

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

   
    const [clickme, setClickme] = useState(false);

    console.log(clickme)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleOpen = () => {
        setClickme(true);
    };
    const handleClose = () => {
        setClickme(false);
    };
    return (
        <React.Fragment onClick={handleClose}>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} aria-controls={open ? 'account-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}>
                        
                        {/* {
                            clickme ? <KeyboardArrowDownIcon  /> : handleClose()

                           
                        } */}
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
               
               
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                

                    <Grid display="flex" p={2} borderRadius="30px" justifyContent='center'>
                        <Grid item md={4} textAlign="center" px={1}>
                            <Typography fontSize="15px">Adults</Typography>
                            <Typography fontSize="10px" py={1}>(Age 12+ years)</Typography>
                            <Button sx={{ borderRadius: "20px", borderColor: "gray" }} variant="outlined" startIcon={< AddCircleOutlineIcon />} endIcon={<RemoveCircleOutlineIcon />}><Typography fontSize="10px" color="orange">2 </Typography></Button>
                        </Grid>
                        <Grid item md={4} textAlign="center" px={1}>
                            <Typography fontSize="15px">Child</Typography>
                            <Typography fontSize="10px" py={1}>(Aged 2-12 years)</Typography>
                            <Button sx={{ borderRadius: "20px", borderColor: "gray" }} variant="outlined" startIcon={< AddCircleOutlineIcon />} endIcon={<RemoveCircleOutlineIcon />}><Typography fontSize="10px" color="orange">2 </Typography></Button>
                        </Grid>
                        <Grid item md={4} textAlign="center" px={1}>
                            <Typography fontSize="15px">Infants</Typography>
                            <Typography fontSize="10px" py={1}>(Below 2 years)</Typography>
                            <Button sx={{ borderRadius: "20px", borderColor: "gray" }} variant="outlined" startIcon={< AddCircleOutlineIcon />} endIcon={<RemoveCircleOutlineIcon />}><Typography fontSize="10px" color="orange">2 </Typography></Button>
                        </Grid>

                    </Grid>

                    <Grid display="flex" justifyContent='center' >
                        <Typography fontSize="15px" >Choose Travel Class</Typography>
                    </Grid>


                    <Grid display="flex" p={1}>
                        <Grid item md={3} textAlign="center" sx={{marginLeft:'2px'}}>
                            <Button sx={{ borderRadius: "20px", borderColor: "gray" ,background:'white'}} variant="contained"  value={1}  checked><Typography fontSize="9px" color="black" >All </Typography></Button>
                        </Grid>
                        <Grid item md={3} textAlign="center" sx={{marginLeft:'2px'}}>
                            <Button sx={{ borderRadius: "20px", borderColor: "gray" ,background:'white'}} variant="contained"  value={2}><Typography fontSize="9px" color="black" > Economy </Typography></Button>
                        </Grid>
                        <Grid item md={3} textAlign="center" sx={{marginLeft:'2px'}}>
                            <Button sx={{ borderRadius: "20px", borderColor: "gray" ,background:'white'}} variant="contained"  value={3}><Typography fontSize="9px" color="black" >Premium Economy</Typography></Button>
                        </Grid>
                        <Grid item md={3} textAlign="center" sx={{marginLeft:'2px'}}>
                            <Button sx={{ borderRadius: "20px", borderColor: "gray" ,background:'white'}} variant="contained" value={4}><Typography fontSize="9px" color="black" >Business</Typography></Button>
                        </Grid>
                    </Grid>
                    <Grid display="flex" pb={2} px={1}  justifyContent='center'>
                        <Grid item md={3} textAlign="center" sx={{marginLeft:'2px'}}>
                            <Button sx={{ borderRadius: "20px", borderColor: "gray",background:'white' }} variant="contained"  value={5}><Typography fontSize="9px" color="black" >Business Economy</Typography></Button>
                        </Grid>
                        <Grid item md={3} textAlign="center" sx={{marginLeft:'2px'}}>
                            <Button sx={{ borderRadius: "20px", borderColor: "gray" ,background:'white'}} variant="contained"  value={6}><Typography fontSize="9px" color="black"  fontWeight='bold'> First Class </Typography></Button>
                        </Grid>
                       
                    </Grid>
               









            </Menu>
        </React.Fragment>
    );
}