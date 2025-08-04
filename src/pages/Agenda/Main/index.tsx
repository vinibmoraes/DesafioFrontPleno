import { useState } from "react";
import { Box, Paper } from "@mui/material";
import CalendarioAulas from "../components/CalendarioAulas";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import AddIcon from "@mui/icons-material/Add";
import ModalCadastroAula from "../components/ModalCadastroAula";
import type { Aula } from "../../../types/AulaAgenda";
import ModalEditarAula from "../components/ModalEditarAula";

const AgendaPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdicao, setOpenModalEdicao] = useState(false);
  const [aulaSelecionada, setAulaSelecionada] = useState<Aula | null>(null);

  const handleCadastrarAula = (dados: any) => {
    console.log("Nova aula cadastrada:", dados);
  };

  const handleEditarAula = (aula: Aula) => {
    setAulaSelecionada(aula);
    setOpenModalEdicao(true);
  };

  const handleSalvarEdicao = (aulaAtualizada: Aula) => {
    console.log("Aula atualizada:", aulaAtualizada);
    setOpenModalEdicao(false);
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          mt: 2,
          width: {
            xs: "100%",
            md: "60%",
          },
        }}
      >
        <CustomButton
          text="Cadastrar Aula"
          startIcon={<AddIcon />}
          color="primary"
          onClick={() => setOpenModal(true)}
        />
      </Box>

      <Paper
        elevation={1}
        sx={{
          padding: 4,
          overflowX: "auto",
          width: {
            xs: "100%",
            md: "60%",
          },
          mt: 2,
        }}
      >
        <CustomText text="Agenda Semanal de Aulas" variant="h5" sx={{ mb: 2 }} />
        <CalendarioAulas onEditarAula={handleEditarAula}/>
      </Paper>

      {/* Modal de Cadastro */}
      <ModalCadastroAula
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleCadastrarAula}
      />

      {/* Modal de Edição */}
      <ModalEditarAula
        open={openModalEdicao}
        onClose={() => setOpenModalEdicao(false)}
        aula={aulaSelecionada}
        onSubmit={handleSalvarEdicao}
      />
    </Box>
  );
};

export default AgendaPage;
