// Importing React
import * as React from 'react';

// Importing MUI
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
} from '@mui/material'

function Signup() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };

  return (
    <Container
      component='main'
      maxWidth='xs'
    >
      {/* Form box */}
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Sign up title */}
        <Typography
          component='h1'
          variant='h5'
        >
          Sign up
        </Typography>

        {/* Form box */}
        <Box
          component='form'
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid
            container
            spacing={2}
          >
            {/* First name grid item */}
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                id='firstName'
                name='firstName'
                label='First Name'
                autoComplete='given-name'
                required
                fullWidth
                autoFocus
              />
            </Grid>

            {/* Last name grid item */}
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                id='lastName'
                name='lastName'
                label='Last Name'
                autoComplete='family-name'
                required
                fullWidth
              />
            </Grid>

            {/* Email grid item */}
            <Grid
              item
              xs={12}
            >
              <TextField
                id='email'
                name='email'
                label='Email'
                autoComplete='email'
                required
                fullWidth
              />
            </Grid>

            {/* Username grid item */}
            <Grid
              item
              xs={12}
            >
              <TextField
                id='username'
                name='username'
                label='Username'
                autoComplete='username'
                required
                fullWidth
              />
            </Grid>

            {/* Password grid item */}
            <Grid
              item
              xs={12}
            >
              <TextField
                id='password'
                name='password'
                label='Password'
                autoComplete='new-password'
                type='password'
                required
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Signup;