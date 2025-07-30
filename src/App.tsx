import { SnackbarProvider } from 'notistack';
import Navigation from "./routes/Navigation";

function App() {  
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      autoHideDuration={3000}
      style={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        fontWeight: 500
      }}
    >
      <Navigation />
    </SnackbarProvider>
  );
}

export default App;