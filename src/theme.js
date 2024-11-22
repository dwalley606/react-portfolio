import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Use dark mode for a darker background
    primary: {
      main: '#ff1744', // Bright red
    },
    secondary: {
      main: '#00e676', // Neon green
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e', // Slightly lighter for paper components
    },
    text: {
      primary: '#ffffff', // White text for contrast
      secondary: '#b0bec5', // Light grey for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#ffffff',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#ffffff',
    },
    body1: {
      fontSize: '1rem',
      color: '#ffffff',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#b0bec5',
    },
  },
  breakpoints: {
    values: {
      xs: 0,    // Extra small devices (phones)
      sm: 600,  // Small devices (tablets)
      md: 960,  // Medium devices (desktops)
      lg: 1280, // Large devices (large desktops)
      xl: 1920, // Extra large devices (larger desktops)
    },
  },
});

export default theme; 