import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#833ab4',
    },
    text: {
      primary: '#616161',
      secondary: '#000000',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#833ab4',
        },
      },
    },
  },
});

export default mainTheme;
