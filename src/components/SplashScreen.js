import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/teamMX-logo.png';
import '../assets/css/style.css';
import {ClipLoader} from 'react-spinners';
import { Button, ButtonGroup, Slide, Typography } from '@mui/material';

export default function SplashScreen(props) {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
            background: 'linear-gradient(180deg, #e20e2d, #aa0f26)'
        }}>
            <div className='splashBG'>
                <div className='logo'>
                    <img className='image' src={logo} alt='Team Logo'/>
                </div>
                <div>
                    {
                        loading ?
                            // While loading show loader image from react-spinners
                            <div className='sweet-loading'>
                                <ClipLoader color='#edc314' loading={loading} size={30} />
                            </div>
                        :
                            //After loading is complete, show buttons
                            <Slide direction='up' in={!loading}>
                                <ButtonGroup orientation='vertical'>
                                    <Button 
                                        variant='contained'
                                        color='primary'
                                        sx={{m:2, width:300,height:50}}
                                        onClick={() => {
                                            navigate('/login')
                                        }}
                                    >
                                        <Typography variant='h6'>
                                            Sign In
                                        </Typography>
                                    </Button>
                                </ButtonGroup>
                            </Slide>
                    }
                </div>
            </div>
        </Box>
    )
}