import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { type Aula } from "../../../../types/AulaAgenda";
import CustomButton from "../../../../components/CustomButton";
import SaveIcon from '@mui/icons-material/Save';
import { enqueueSnackbar } from "notistack";

interface ModalEditarAulaProps {
  open: boolean;
  onClose: () => void;
  aula: Aula | null;
  onSubmit: (aulaAtualizada: Aula) => void;
}

const ModalEditarAula: React.FC<ModalEditarAulaProps> = ({ open, onClose, aula, onSubmit }) => {
  const [form, setForm] = useState<Aula>({
    id: 0,
    descricao: "",
    tipoAula: "Musculacao",
    dataHora: "",
    capacidadeMaxima: 0,
    status: "aberta",
    permiteAgendamentoAposInicio: false,
    local: "",
    alunos: [],
  });

  useEffect(() => {
    if (aula) setForm(aula);
  }, [aula]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name!]: value }));
  };

  const handleSubmit = () => {
    if (!form.descricao || !form.tipoAula || !form.dataHora || !form.local) {
      enqueueSnackbar('Preencha os campos obrigatórios!', { variant: 'warning' });
      return;
    }
    enqueueSnackbar('Aula editada com sucesso!', { variant: 'success' });
    onSubmit(form);
    onClose();
  };

  const labelStyles = {
    "& .MuiInputLabel-root": {
      color: "#616161",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#616161",
    },
    
    "& .MuiInputLabel-formControl": {
      color: "#616161",
    },
    "& .MuiInputLabel-shrink": {
      color: "#616161 !important",
    },
  };


  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" 
    >
      <DialogTitle>Editar Aula</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2}}>
        <TextField
          label="Descrição"
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
          required
          sx={{...labelStyles, paddingTop: 4}}
        />

        <FormControl fullWidth sx={labelStyles}>
          <InputLabel>Tipo da Aula</InputLabel>
          <Select
            name="tipoAula"
            value={form.tipoAula}
            label="Tipo da Aula"
            onChange={(e) => handleChange(e as React.ChangeEvent<{ name?: string; value: unknown }>)}
            required
          > 
            <MenuItem value="Musculacao">Musculação</MenuItem>
            <MenuItem value="Cardio">Cardio</MenuItem>
            <MenuItem value="Funcional">Funcional</MenuItem>
            <MenuItem value="Cross">Cross</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Data e Hora"
          name="dataHora"
          type="datetime-local"
          value={form.dataHora}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
          sx={labelStyles}
        />

        <TextField
          label="Capacidade Máxima"
          name="capacidadeMaxima"
          type="number"
          value={form.capacidadeMaxima}
          onChange={handleChange}
          sx={labelStyles}
        />

        <TextField
          label="Local"
          name="local"
          value={form.local}
          onChange={handleChange}
          required
          sx={labelStyles}
        />

        <FormControl fullWidth sx={labelStyles}>
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            value={form.status}
            label="Status"
            onChange={(e) => handleChange(e as React.ChangeEvent<{ name?: string; value: unknown }>)}
          >
            <MenuItem value="aberta">Aberta</MenuItem>
            <MenuItem value="concluída">Concluída</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={labelStyles}>
          <InputLabel>Permite agendamento após início?</InputLabel>
          <Select
            name="permiteAgendamentoAposInicio"
            value={form.permiteAgendamentoAposInicio ? "sim" : "nao"}
            label="Permite agendamento após início?"
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                permiteAgendamentoAposInicio: e.target.value === "sim",
              }))
            }
          >
            <MenuItem value="sim">Sim</MenuItem>
            <MenuItem value="nao">Não</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>

      <DialogActions>
        <CustomButton onClick={onClose} text="Cancelar" color="#999" />
        <CustomButton startIcon={<SaveIcon />} onClick={handleSubmit} text="Salvar" color="primary"/>
      </DialogActions>
    </Dialog>
  );
};

export default ModalEditarAula;
