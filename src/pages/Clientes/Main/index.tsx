import { useState } from "react";
import { Box, Paper } from "@mui/material";
import ListaClientes from "../components/ListaClientes";
import CustomButton from "../../../components/CustomButton";
import AddIcon from '@mui/icons-material/Add';
import ModalCadastroCliente from "../components/ModalCadastroCliente";

const ClientesPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleSubmitCliente = (dados: any) => {
    console.log("Cliente cadastrado:", dados);
    // Victor, aqui seria onde eu passaria o service com o post pra api.
  };

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
        <CustomButton startIcon={<AddIcon />} text="Novo Cliente" onClick={() => setOpenModal(true)} />
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

      <ModalCadastroCliente
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleSubmitCliente}
      />
    </Box>
  );
};

export default ClientesPage;
