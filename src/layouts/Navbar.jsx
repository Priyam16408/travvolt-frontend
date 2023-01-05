import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Button, Typograph, useMediaQuery, useTheme, Typography, Avatar } from '@mui/material';
import tra from '../images/tra.png';
import DrawerComp from './DrawerComp';
import Countrypicker from "./Countrypicker";

const PAGES = ["Home", "About Us", "Contact Us", "Products"];
const Header = () => {

    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    return (
        <React.Fragment>
            <AppBar sx={{ backgroundColor: "rgba(13, 19, 52, 0.7)" }}>
                <Toolbar>

                    <img src={tra} />

                    {
                        isMatch ? (
                            <>
                                <DrawerComp />
                            </>
                        ) : (
                            <>


                                <Tabs sx={{ marginLeft: "auto" }}><Countrypicker /></Tabs>

                            </>
                        )
                    }
                </Toolbar>

            </AppBar>
        </React.Fragment>
    );
};

export default Header;