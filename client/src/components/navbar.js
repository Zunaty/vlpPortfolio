// Importing React
import * as React from 'react';

// Importing MUI
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu'

function Nav(props) {
  console.log(props);

  return (
    <Box
      sx={{ flexGrow: 1 }}
    >
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            Victor L Perez
          </Typography>

          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav;