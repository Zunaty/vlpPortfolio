// Importing React
import { useState } from 'react';

// Importing MUI
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Switch
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu'

function Nav(props) {
  console.log(props);

  const {
    setDarkMode,
  } = props;

  const [checked, setChecked] = useState(false);

  const handleDarkMode = (e) => {
    setChecked(e.target.checked);
    localStorage.setItem("DarkMode", !checked);
    setDarkMode(!checked);
  }

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

          <Switch
            checked={checked}
            onChange={handleDarkMode}
            inputProps={{ 'aria-label': 'controlled' }}
          />

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