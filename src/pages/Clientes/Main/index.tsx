import { Box, Paper } from "@mui/material";
import ListaClientes from "../components/ListaClientes";

const ClientesPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
