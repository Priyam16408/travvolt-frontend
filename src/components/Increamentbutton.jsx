import IconButton from '@mui/material/IconButton';
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Avatar } from '@mui/material';

export default function App() {
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count > 0) {
      count = count-1;
      
      
    }
    
    setCount(count);
  }
  return (
    <div className="App">
      <Button variant="contained" style={{ display: "flex", justifyContent: "space-between", borderRadius: "20px" , height:"30px", boxShadow:"1px 1px 5px gray",border:"1px solid gray" ,backgroundColor:"white"}} size="small">
        <div>
          <IconButton aria-label="increase" size="small">
           <Avatar onClick={incrementCount} sx={{backgroundColor:"white", color:"black", fontSize:"15px", fontWeight:"bold", height:"20px", height:"20px"}}> +</Avatar> {/* <Button onClick={incrementCount}>+</Button> */}
           
          </IconButton>

        </div>
        <div style={{color:"#FF8900"}}>{count}</div>
        <div>
          <IconButton aria-label="delete" size="small">
            {" "}
            <Avatar onClick={decrementCount} sx={{backgroundColor:"white", color:"black", fontSize:"18px", fontWeight:"bold", height:"20px", height:"20px"}}>-</Avatar>
            {/* <Button onClick={decrementCount}>-</Button> */}
            
          </IconButton>

        </div>
      </Button>
    </div>
  );
}
