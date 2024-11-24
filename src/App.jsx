import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigation from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Navigation />
        <Box component="main" sx={{ height: '80vh', mb: 12 }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
