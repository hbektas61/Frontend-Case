import React from 'react';
import { Container, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import Ribbon from './Ribbon/Ribbon';
import PatientList from '../PatientList/PatientList';
import { useUser } from "@clerk/nextjs";


function MainPage({patients}) {
    const { isLoaded, isSignedIn, user } = useUser();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        isLoaded && (<Container maxWidth="lg">
            <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
            { isSignedIn && `Good morning,Dr.${user.username}!`}
                
            </Typography>
                Hello there! Welcome to our medical app. How can we assist you today?
            <Box display="flex" justifyContent="space-between" marginBottom="20px">
                <Ribbon patients={patients}/>
            </Box>
            <PatientList patients={patients}/>
        </Container>)
    );
}

export default MainPage;
