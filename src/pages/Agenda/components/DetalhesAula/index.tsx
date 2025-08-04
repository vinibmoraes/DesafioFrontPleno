import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Chip,
  Stack,
  TextField,
  Tooltip,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { type Aula } from "../../../../types/AulaAgenda";
import { enqueueSnackbar } from "notistack";
import CustomButton from "../../../../components/CustomButton";
import { Autocomplete } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";


interface DetalhesAulaProps {
  open: boolean;
  onClose: () => void;
  aula: Aula | null;
  onSave: (aulaAtualizada: Aula) => void; 
}

const DetalhesAula: React.FC<DetalhesAulaProps> = ({
  open,
  onClose,
  aula,
  onSave,
}) => {

  const [alunos, setAlunos] = useState(aula?.alunos ?? []);
  const [status, setStatus] = useState(aula?.status ?? "aberta");
  const [novoAlunoNome, setNovoAlunoNome] = useState("");
  const [alunosDisponiveis, setAlunosDisponiveis] = useState<{ id: number; nome: string }[]>([]);

  useEffect(() => {
    if (aula) {
      setAlunos(aula.alunos ?? []);
      setStatus(aula.status);
      setNovoAlunoNome("");
  
      // Vitão, aqui fiz mockado mesmo, por não ter os alunos vindos do backend
  setAlunosDisponiveis([
      { id: 1, nome: "Ana Silva" },
      { id: 2, nome: "Carlos Oliveira" },
      { id: 3, nome: "Fernanda Costa" },
      { id: 4, nome: "João Pereira" },
      { id: 5, nome: "Maria Santos" },
      
      ]);
    }
  }, [aula, open]);


  useEffect(() => {
    if (aula) {
      setAlunos(aula.alunos ?? []);
      setStatus(aula.status);
      setNovoAlunoNome("");
    }
  }, [aula, open]);

  // Função para adicionar aluno
  const handleAdicionarAluno = () => {
    if (status === "concluída") {
      enqueueSnackbar("Não é possível adicionar alunos em uma aula finalizada.", {
        variant: "error",
      });
      return;
    }
  
    const nomeTrimado = novoAlunoNome.trim();
    if (!nomeTrimado) return;
  
    // Verifica se a aula já começou
    const agora = new Date();
    const inicioAula = aula ? new Date(aula.dataHora) : null;
    const aulaJaComecou = inicioAula && agora > inicioAula;
  
    if (aulaJaComecou && !aula?.permiteAgendamentoAposInicio) {
      enqueueSnackbar("Não é possível adicionar alunos após o início da aula.", {
        variant: "error",
      });
      return;
    }
  
    if (alunos.length >= (aula?.capacidadeMaxima ?? 0)) {
      enqueueSnackbar("Capacidade máxima de alunos atingida!", {
        variant: "error",
      });
      return;
    }
  
    const jaExiste = alunos.some(
      (aluno) => aluno.nome.toLowerCase() === nomeTrimado.toLowerCase()
    );
  
    if (jaExiste) {
      enqueueSnackbar("Este aluno já está inscrito na aula.", {
        variant: "warning",
      });
      return;
    }
  
    const novoAluno = { id: Date.now(), nome: nomeTrimado };
    setAlunos((prev) => [...prev, novoAluno]);
    setNovoAlunoNome("");
    enqueueSnackbar("Aluno adicionado com sucesso!", {
      variant: "success",
    });
  };
  

  // Função para remover aluno
  const handleRemoverAluno = (id: number) => {
    setAlunos((prev) => prev.filter((aluno) => aluno.id !== id));
    enqueueSnackbar("Aluno removido com sucesso!", {
      variant: "success",
    });
  };

  // Função para finalizar a aula
  const handleFinalizarAula = () => {
    if (status === "aberta") {
      setStatus("concluída");
      enqueueSnackbar("Aula finalizada com sucesso!", {
        variant: "success",
      });
    }
  };

  // Função salvar
  const handleSalvar = () => {
    if (!aula) return;
    onSave({
      ...aula,
      alunos,
      status,
    });
    onClose();
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const capacidadeMaxima = aula?.capacidadeMaxima ?? 0;
  const atingiuCapacidade = alunos.length >= capacidadeMaxima;

  

  return (
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>Detalhes da Aula</DialogTitle>
        <DialogContent
          dividers
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography>
            <strong>Descrição:</strong> {aula?.descricao}
          </Typography>
          <Typography>
            <strong>Tipo da Aula:</strong> {aula?.tipoAula}
          </Typography>
          <Typography>
            <strong>Data e Hora:</strong>{" "}
            {aula ? new Date(aula.dataHora).toLocaleString() : ""}
          </Typography>
          <Typography>
            <strong>Permite Agendamento Pós-Início:</strong> {aula?.permiteAgendamentoAposInicio ? "Sim" : "Não"}
          </Typography>
          <Typography>
            <strong>Local:</strong> {aula?.local}
          </Typography>
          <Typography>
            <strong>Status:</strong> {status}
          </Typography>
          <Typography>
            <strong>Capacidade Máxima:</strong> {capacidadeMaxima}
          </Typography>  
          <Typography>
            <strong>Alunos ({alunos.length}):</strong>
          </Typography>
  
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {alunos.length > 0 ? (
              alunos.map((aluno) => (
                <Chip
                  key={aluno.id}
                  label={aluno.nome}
                  onDelete={() => handleRemoverAluno(aluno.id)}
                  color="primary"
                />
              ))
            ) : (
              <Typography fontStyle="italic">Nenhum aluno inscrito</Typography>
            )}
          </Stack>
  
          <Box
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Autocomplete
              freeSolo
              options={alunosDisponiveis.map((a) => a.nome)}
              inputValue={novoAlunoNome}
              onInputChange={(_, value) => setNovoAlunoNome(value)}
              disabled={atingiuCapacidade}
              sx={{ width: isSmallScreen ? '100%' : '75%' }}  
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Nome do aluno"
                  size="small"
                />
              )}
            />
  
            {atingiuCapacidade ? (
              <Tooltip
                title="A quantidade máxima de alunos permitidos nesta aula foi atingida"
                arrow
                disableInteractive
              >
                <Box sx={{ display: 'inline-block', width: '70%', mt: 1 }}>
                  <Box sx={{ pointerEvents: "none", opacity: 0.5 }}>
                    <CustomButton
                      onClick={handleAdicionarAluno}
                      disabled
                      text="Adicionar"
                      color="primary"
                      
                    />
                  </Box>
                </Box>
              </Tooltip>
            ) : (
              <CustomButton
                onClick={handleAdicionarAluno}
                disabled={novoAlunoNome.trim() === ""}
                text="Adicionar"
                color="primary"
             
              />
            )}
          </Box>
  
          <Box>
            {status === "concluída" ? (
              <Tooltip
                title="Esta aula já foi finalizada"
                arrow
                disableInteractive
              >
                <Box sx={{ display: "inline-block", pointerEvents: "auto" }}>
                  <Box sx={{ pointerEvents: "none", opacity: 0.5 }}>
                    <CustomButton
                      onClick={handleFinalizarAula}
                      disabled
                      color="primary"
                      text="Aula concluída"
                    />
                  </Box>
                </Box>
              </Tooltip>
            ) : (
              <CustomButton
                onClick={handleFinalizarAula}
                color="primary"
                text="Finalizar aula"
              />
            )}
          </Box>
        </DialogContent>
        <DialogActions sx={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        justifyContent: isSmallScreen ? 'center' : 'flex-end',
        gap: 1,
        alignItems: 'flex-end',
        padding: isSmallScreen ? 4 : 2,
      }}>
        <CustomButton 
          onClick={onClose} 
          text="Cancelar" 
          color="#999"
          
        />
        <CustomButton 
          startIcon={<SaveIcon />}
          onClick={handleSalvar} 
          text="Salvar" 
          color="primary"
          
        />

      </DialogActions>
    </Dialog>
  );
};



export default DetalhesAula;
