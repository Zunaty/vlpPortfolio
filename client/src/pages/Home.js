// Importing React
import * as React from 'react';

// Importing MUI
import {
    Container, 
    Typography,
} from '@mui/material';

function Home() {
    return (
        <>
            <Container
                component='main'
                maxWidth='xs'
            >
                <Typography
                    component='h1'
                    variant='h5'
                >
                    Home Page
                </Typography>

            </Container>
        </>
    )
}

export default Home;