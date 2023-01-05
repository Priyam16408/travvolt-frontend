import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  
  const [value, setValue] = React.useState(('2022-05-07'));


  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       <DatePicker 
          views={['day', 'month', 'year']}
          label="RETURN DATE" 
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
    </LocalizationProvider>
  );
}

