import { ArrowBack } from '@mui/icons-material';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import HideOnScroll from '../../utility/HideOnScroll';
import './topHeader.css'

export default function TopHeader(props) {
    return (
        <HideOnScroll>
            <Box sx={{
                flexGrow: 1,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <AppBar position='static' color='transparent' elevation={0}>
                    <div className='topHeaderBg'>
                        <Toolbar>
                            <Button
                                variant='contained'
                                color={"secondary"}
                                onClick={() => {
                                    window.alert("Back button clicked")
                                }}
                            >
                                <ArrowBack/>
                            </Button>
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    height: "150px",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Typography variant='h4'>
                                    {props.mainHeader}
                                </Typography>
                                <Typography variant='h6'>
                                    {props.subHeader}
                                </Typography>
                            </Box>
                        </Toolbar>
                    </div>
                </AppBar>
            </Box>
        </HideOnScroll>
    )
}