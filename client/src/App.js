// Importing React
import { useState } from 'react';

// Importing MUI components
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Importing components / pages / css
import Nav from './components/navbar';
import Footer from './components/footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './assets/styles/app.css';

// MUI Theme and light / dark
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#426b83'
    },
    secondary: {
      main: '#f50057'
    }
  }
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3a285e'
    },
    secondary: {
      main: '#f50057'
    }
  }
})

function App() {
  // Nav Button states
  const [loginSelect, setLoginSelect] = useState(false);
  const [signupSelect, setSignupSelect] = useState(false);
  const [projectsSelect, setProjectsSelect] = useState(false);
  const [contactSelect, setContactSelect] = useState(false);

  // Score tracker state
  const [score, setScore] = useState(null);

  // Light or Dark state
  const [darkMode, setDarkMode] = useState(null);

  if ( localStorage.getItem("DarkMode") == null ) {
    localStorage.setItem("DarkMode", false)
  }
  if ( localStorage.getItem("DarkMode") === true) {
    setDarkMode(true);
  };

  return (
    <div className={darkMode ? 'darkBG' : 'lightBG'}>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Nav
          loginSelect={loginSelect}
          setLoginSelect={setLoginSelect}
          signupSelect={signupSelect}
          setSignupSelect={setSignupSelect}
          projectsSelect={projectsSelect}
          setProjectsSelect={setProjectsSelect}
          contactSelect={contactSelect}
          setContactSelect={setContactSelect}

          score={score}
          setScore={setScore}

          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main>
          {loginSelect ? (
            <Login />
          ) : signupSelect ? (
            <Signup />
          ) : projectsSelect ? (
            <Projects />
          ) : contactSelect ? (
            <Contact />
          ) : (
            <Home />
          )}
        </main>

        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;