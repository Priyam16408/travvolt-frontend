import * as React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Paper, Grid, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Increamentbutton from "./Increamentbutton";



export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <IconButton aria-label="downarrow" variant="contained" {...bindTrigger(popupState)}>
            <KeyboardArrowDownIcon />
          </IconButton>
          <Popover {...bindPopover(popupState)} anchorOrigin={{  vertical: 'bottom', }} transformOrigin={{  vertical: 'top', horizontal: 'center',}}>
           <Box>
           <Grid display="flex" p={2} borderRadius="30px" justifyContent='center'>
                        <Grid item md={4} textAlign="center" px={1}>
                            <Typography fontSize="15px">Adults</Typography>
                            <Typography fontSize="10px" py={1}>(Age 12+ years)</Typography>
                            <Increamentbutton />
                        </Grid>
                        <Grid item md={4} textAlign="center" px={1}>
                            <Typography fontSize="15px">Child</Typography>
                            <Typography fontSize="10px" py={1}>(Aged 2-12 years)</Typography>
                            <Increamentbutton />
                        </Grid>
                        <Grid item md={4} textAlign="center" px={1}>
                            <Typography fontSize="15px">Infants</Typography>
                            <Typography fontSize="10px" py={1}>(Below 2 years)</Typography>
                            <Increamentbutton />
                        </Grid>

                    </Grid>

                    <Grid display="flex" justifyContent='center' >
                        <Typography fontSize="15px" >Choose Travel Class</Typography>
                    </Grid>


                    <Grid display="flex" justifyContent="center" p={1}>
                        <Grid item md={3} textAlign="center" sx={{marginLeft:'2px'}}>
                            <Button size='large' sx={{ borderRadius: "20px", borderColor: "gray" ,background:'white'}} variant="contained"  value={1}  checked><Typography fontSize="9px" color="black"  >All </Typography></Button>
                        </Grid>
                        <Grid item md={3} textAlign="center" sx={{marginLeft:'2px'}}>
                            <Button size='large' sx={{ borderRadius: "20px", borderColor: "gray" ,background:'white'}} variant="contained"  value={2}><Typography fontSize="9px" color="black" > Economy </Typography></Button>
                        </Grid>
                        <Grid item md={3} textAlign="center" sx={{marginLeft:'2px'}}>
                            <Button size='large' sx={{ borderRadius: "20px", borderColor: "gray" ,background:'white'}} variant="contained"  value={3}><Typography fontSize="9px" color="black" >Premium Economy</Typography></Button>
                        </Grid>
                        <Grid item md={3} textAlign="center" sx={{marginLeft:'2px'}}>
                            <Button size='large' sx={{ borderRadius: "20px", borderColor: "gray" ,background:'white'}} variant="contained" value={4}><Typography fontSize="9px" color="black" >Business</Typography></Button>
                        </Grid>
                    </Grid>
                    <Grid display="flex" pb={2} px={1}  justifyContent='center'>
                        <Grid item md={3} textAlign="center" sx={{marginLeft:'2px'}}>
                            <Button size='large' sx={{ borderRadius: "20px", borderColor: "gray",background:'white' }} variant="contained"  value={5}><Typography fontSize="9px" color="black" >Business Economy</Typography></Button>
                        </Grid>
                        <Grid item md={3} textAlign="center" sx={{marginLeft:'2px'}}>
                            <Button size='large' sx={{ borderRadius: "20px", borderColor: "gray" ,background:'white'}} variant="contained"  value={6}><Typography fontSize="9px" color="black"  fontWeight='bold'> First Class </Typography></Button>
                        </Grid>
                       
                    </Grid>
                    <Grid display="flex" pb={2} px={1}  justifyContent='center'>
                        
                        <Grid item md={3} textAlign="center" sx={{marginLeft:'2px'}}>
                            <Button size='large' sx={{ borderRadius: "20px", borderColor: "gray" ,background:'#FF8900'}} variant="contained"  value={6}>Ok</Button>
                        </Grid>
                       
                    </Grid>
               



           </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}