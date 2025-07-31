import { createTheme } from '@mui/material/styles';

export const clientesTheme = createTheme({
  palette: {
    primary: {
      main: '#1e88e5',
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
          backgroundColor: '#1e88e5',
        },
      },
    },
  },
});

export default clientesTheme;