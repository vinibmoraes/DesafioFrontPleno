import { Box, Paper } from "@mui/material";
import ListaClientes from "../components/ListaClientes";
import CustomButton from "../../../components/CustomButton";
import AddIcon from '@mui/icons-material/Add';

const ClientesPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2, width: {
            xs: "100%",
            md: "60%",
            }, 
          }}>
        <CustomButton startIcon={<AddIcon />} text="Novo Cliente" onClick={() => {}} />
      </Box>
      <Paper
        elevation={1}
        sx={{
          padding: 5,
          overflowX: "auto",
          mt: 3,
          maxWidth: "100%",
          width: {
            xs: "100%",
            md: "60%",
          },
        }}
      >
        <ListaClientes />
      </Paper>
    </Box>
  );
};

export default ClientesPage;
