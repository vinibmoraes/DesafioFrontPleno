import { createTheme } from '@mui/material/styles';

export const agendaTheme = createTheme({
  palette: {
    primary: {
      main: '#563d80',
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
          backgroundColor: '#563d80',
        },
      },
    },
  },
});

export default agendaTheme;