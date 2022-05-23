// Importing React
import react, { useState } from 'react';

// Importing MUI components
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Importing components / pages
import Nav from './components/navbar';
import Footer from './components/footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// MUI Theme and light / dark
const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: ''
    },
    secondary: {
      main: ''
    },
    success: {
      main: ''
    },
    info: {
      main: ''
    }
  }
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: ''
    },
    secondary: {
      main: ''
    },
    success: {
      main: ''
    },
    info: {
      main: ''
    }
  }
})

function App() {


  return (
    <div>
      <Nav></Nav>

      <main>

      </main>

      <Footer></Footer>
    </div>
  );
};

export default App;