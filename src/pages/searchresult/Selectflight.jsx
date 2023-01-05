import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Viewpricebtn from "./Viewpricebtn";
import Viewflightdetails from './Viewflightdetails';
import Viewtravvolt from "./Viewtravvolt";
import Viewsupper from "./Viewsupper";
import Viewsaver from "./Viewsaver"


import SendIcon from '@mui/icons-material/Send';



export default function BasicGrid() {
  const [value, setValue] = useState(true)
  const clickme = () => {
    console.log(value)
    setValue(!value)

  }
  return (
    <Box sx={{ flexGrow: 5, backgroundColor: "white", borderRadius: '10px', }} my={3}>
      <Grid container p={2} display='flex' justifyContent='center'>
        <Grid md={2} display='flex' justifyContent='center' alignItems='center' >
          <Box sx={{ width: '36px', height: '36px', border: '1px solid gray' }} >

          </Box>
          <Box px={1}>
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>IndiGO</Typography>
            <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>6E 2431, 6E 909</Typography>
          </Box>
        </Grid>
        <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
          <Box px={1}>
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>04:55</Typography>
            <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#707070' }}>New Delhi</Typography>
          </Box>
        </Grid>
        <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
          <Box px={1}>
            <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#707070' }}>09h 15m</Typography>
            <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#707070' }}>1 Stop via Jaipur</Typography>
          </Box>
        </Grid>
        <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
          <Box px={1}>
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>04:55</Typography>
            <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#707070' }}>New Delhi</Typography>
          </Box>
        </Grid>
        <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
          <Box px={1}>
            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#FF8900' }}>$3453</Typography>
          </Box>
        </Grid>
        <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
          <Button variant="contained" onClick={clickme} sx={{ borderRadius: '30px', background: '#4260D8 0% 0% no-repeat padding-box' }} endIcon={<SendIcon />}>View Price</Button>
        </Grid>

      </Grid>
      <Grid container p={2} display='flex' justifyContent='space-between' >
        <Viewflightdetails />
        <Typography sx={{ color: '#0AFF2B', fontSize: '14px', fontWeight: 'bold', }}>Use Travvolt and get Rs 299 instant discount</Typography>
      </Grid>
      <Box className={(value) => value ? "active" : "inactive"}>
        <Grid container px={2} py={1} display='flex' justifyContent='space-between'>
          <Viewpricebtn />
        </Grid>
        <Grid container px={2} py={1} display='flex' justifyContent='space-between'>
          <Viewsaver />
        </Grid>
        <Grid container px={2} py={1} display='flex' justifyContent='space-between' >
          <Viewsupper />
        </Grid>
        <Grid container px={2} py={1} display='flex' justifyContent='space-between' >
          <Viewtravvolt />
        </Grid>
      </Box>

    </Box>
  );
}