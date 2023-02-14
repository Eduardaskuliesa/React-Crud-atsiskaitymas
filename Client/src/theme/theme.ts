import { createTheme } from '@mui/material';

// sukuria temą, default temos pagrindu.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1b2731',
    },
  },
  zIndex: {
    appBar: 1250,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
