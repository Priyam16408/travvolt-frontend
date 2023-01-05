import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import Card from "../components/Card";

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value} centered>
            <Box >
              <TabList onChange={handleChange} aria-label="lab API tabs example" centered sx={{ backgroundColor: "white", borderRadius: "20px", marginX: "200px", boxShadow: "2px 2px 8px gray", }}>
                <Tab label="Search" value="1" />
                <Tab label="Destinations" value="2" />
                <Tab label="Search Deals " value="3" />
                <Tab label="Featured" value="4" />
                <Tab label="Travel Guidlines" value="5" />

              </TabList>
            </Box>


            <TabPanel value="1" px={5}>
              <Box py={4} sx={{ backgroundColor: "white", marginX: "120px", borderRadius: "20px", paddingX: "100px" }} >
                <form action="" >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_input" display="flex">
                        <label for="from" className="form_lable">FROM</label>
                        <input type="text" name="from" id="from" className="from_input" placeholder="Enter city or airport" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_input" display="flex">
                        <label for="to" className="form_lable">TO</label>
                        <input type="text" name="to" id="to" className="to_input" placeholder="Enter city or airport" />
                      </div>
                    </div>
                  </div>
                </form>

                <Box sx={{ display: "flex", justifyContent: "center" }} mt={3}>
                  <Button variant="contained" size="large" centered>Search</Button>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="2" px={5}>
              <Box py={4} sx={{ backgroundColor: "white", marginX: "120px", borderRadius: "20px", paddingX: "100px" }} >
                <Card />

                <Box sx={{ display: "flex", justifyContent: "center" }} mt={3}>
                  <Button variant="contained" size="large" centered>Search</Button>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="3" px={5}>
              <Box py={4} sx={{ backgroundColor: "white", marginX: "120px", borderRadius: "20px", paddingX: "100px" }} >
                <form action="" >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_input" display="flex">
                        <label for="from" className="form_lable">FROM</label>
                        <input type="text" name="from" id="from" className="from_input" placeholder="Enter city or airport" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_input" display="flex">
                        <label for="to" className="form_lable">TO</label>
                        <input type="text" name="to" id="to" className="to_input" placeholder="Enter city or airport" />
                      </div>
                    </div>
                  </div>
                </form>

                <Box sx={{ display: "flex", justifyContent: "center" }} mt={3}>
                  <Button variant="contained" size="large" centered>Search</Button>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="4" px={5}>
              <Box py={4} sx={{ backgroundColor: "white", marginX: "120px", borderRadius: "20px", paddingX: "100px" }} >
                <form action="" >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_input" display="flex">
                        <label for="from" className="form_lable">FROM</label>
                        <input type="text" name="from" id="from" className="from_input" placeholder="Enter city or airport" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_input" display="flex">
                        <label for="to" className="form_lable">TO</label>
                        <input type="text" name="to" id="to" className="to_input" placeholder="Enter city or airport" />
                      </div>
                    </div>
                  </div>
                </form>

                <Box sx={{ display: "flex", justifyContent: "center" }} mt={3}>
                  <Button variant="contained" size="large" centered>Search</Button>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="5" px={5}>
              <Box py={4} sx={{ backgroundColor: "white", marginX: "120px", borderRadius: "20px", paddingX: "100px" }} >
                <form action="" >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_input" display="flex">
                        <label for="from" className="form_lable">FROM</label>
                        <input type="text" name="from" id="from" className="from_input" placeholder="Enter city or airport" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_input" display="flex">
                        <label for="to" className="form_lable">TO</label>
                        <input type="text" name="to" id="to" className="to_input" placeholder="Enter city or airport" />
                      </div>
                    </div>
                  </div>
                </form>

                <Box sx={{ display: "flex", justifyContent: "center" }} mt={3}>
                  <Button variant="contained" size="large" centered>Search</Button>
                </Box>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </React.Fragment>
  );
}